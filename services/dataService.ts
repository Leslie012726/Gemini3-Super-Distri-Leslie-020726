import { MedFlowRow, DataMetrics } from '../types';

export const parseData = (inputText: string): { data: MedFlowRow[], metrics: DataMetrics } => {
  const trimmed = inputText.trim();
  if (trimmed.startsWith('[') || trimmed.startsWith('{')) {
    return parseJSON(trimmed);
  } else {
    return parseCSV(trimmed);
  }
};

const normalizeRow = (raw: any, index: number): MedFlowRow => {
  // Field Mappings (Case insensitive lookups)
  const getVal = (keys: string[]) => {
    for (const k of keys) {
      // Direct match
      if (raw[k] !== undefined) return raw[k];
      // Case insensitive match
      const found = Object.keys(raw).find(rk => rk.toLowerCase() === k.toLowerCase());
      if (found && raw[found] !== undefined) return raw[found];
    }
    return '';
  };

  const deliverDateStr = String(getVal(['Deliverdate', 'Date', 'DeliveryDate']) || '');
  const numberStr = String(getVal(['Number', 'Qty', 'Quantity', 'Amount']) || '0');
  const deviceName = String(getVal(['DeviceNAME', 'Device', 'Product', 'Item']) || '').trim();
  const supplierId = String(getVal(['SupplierID', 'Supplier', 'Vendor']) || 'UNKNOWN').trim();
  const customerId = String(getVal(['CustomerID', 'Customer', 'Client']) || 'UNKNOWN').trim();
  const category = String(getVal(['Category', 'Type', 'Class']) || 'General').trim();
  const licenseNo = String(getVal(['LicenseNo', 'License']) || '').trim();
  const udid = String(getVal(['UDID']) || '').trim();
  const lotNo = String(getVal(['LotNO', 'Lot', 'Batch']) || '').trim();
  const serNo = String(getVal(['SerNo', 'SN', 'Serial']) || '').trim();
  const model = String(getVal(['Model']) || '').trim();

  // Date Parsing
  let parsedDate: Date | null = null;
  if (/^\d{8}$/.test(deliverDateStr)) {
    const y = parseInt(deliverDateStr.substring(0, 4));
    const m = parseInt(deliverDateStr.substring(4, 6)) - 1;
    const d = parseInt(deliverDateStr.substring(6, 8));
    parsedDate = new Date(y, m, d);
  } else {
    parsedDate = new Date(deliverDateStr);
    if (isNaN(parsedDate.getTime())) parsedDate = null;
  }

  // Number Parsing
  let num = parseInt(numberStr.replace(/[^0-9.-]/g, ''));
  if (isNaN(num)) num = 0;

  return {
    Deliverdate: deliverDateStr,
    Number: num,
    DeviceNAME: deviceName,
    SupplierID: supplierId,
    CustomerID: customerId,
    Category: category,
    LicenseNo: licenseNo,
    UDID: udid,
    LotNO: lotNo,
    SerNo: serNo,
    Model: model,
    parsedDate: parsedDate,
    id: `row-${index}`
  };
};

export const parseJSON = (jsonText: string): { data: MedFlowRow[], metrics: DataMetrics } => {
  try {
    let rawData = JSON.parse(jsonText);
    if (!Array.isArray(rawData)) {
      // If object, try to find an array property
      const key = Object.keys(rawData).find(k => Array.isArray(rawData[k]));
      if (key) rawData = rawData[key];
      else throw new Error("JSON must contain an array of records");
    }

    const data: MedFlowRow[] = rawData.map((r: any, i: number) => normalizeRow(r, i));
    return calculateMetrics(data);
  } catch (e) {
    throw new Error("Invalid JSON format");
  }
};

export const parseCSV = (csvText: string): { data: MedFlowRow[], metrics: DataMetrics } => {
  const lines = csvText.split(/\r?\n/).filter(line => line.trim() !== '');
  if (lines.length < 2) throw new Error("CSV must have header and at least one row");

  // Simple CSV parser handling quotes
  const splitCSV = (str: string) => {
    const matches = str.matchAll(/(?:^|,)("(?:[^"]|"")*"|[^,]*)/g);
    return Array.from(matches).map(m => m[1].replace(/^"(.*)"$/, '$1').replace(/""/g, '"'));
  };

  const headers = splitCSV(lines[0]).map(h => h.trim());
  
  const data: MedFlowRow[] = [];
  let parseFailures = 0;

  for (let i = 1; i < lines.length; i++) {
    const rowRaw = splitCSV(lines[i]);
    if (rowRaw.length < headers.length) {
      parseFailures++;
      continue;
    }

    const rowObj: Record<string, string> = {};
    headers.forEach((h, idx) => {
      rowObj[h] = rowRaw[idx] || '';
    });

    data.push(normalizeRow(rowObj, i));
  }

  const result = calculateMetrics(data);
  result.metrics.parseFailures += parseFailures;
  return result;
};

const calculateMetrics = (data: MedFlowRow[]): { data: MedFlowRow[], metrics: DataMetrics } => {
    const suppliers = new Set<string>();
    const customers = new Set<string>();
    const categories = new Set<string>();
    let minDate: number | null = null;
    let maxDate: number | null = null;
    let totalUnits = 0;

    data.forEach(row => {
        if (row.parsedDate) {
            const time = row.parsedDate.getTime();
            if (minDate === null || time < minDate) minDate = time;
            if (maxDate === null || time > maxDate) maxDate = time;
        }
        suppliers.add(row.SupplierID);
        customers.add(row.CustomerID);
        categories.add(row.Category);
        totalUnits += row.Number;
    });

    const metrics: DataMetrics = {
        totalRows: data.length,
        totalUnits: totalUnits,
        uniqueSuppliers: suppliers.size,
        uniqueCustomers: customers.size,
        uniqueCategories: categories.size,
        dateRange: [minDate ? new Date(minDate) : null, maxDate ? new Date(maxDate) : null],
        missingValues: {},
        parseFailures: 0
    };

    return { data, metrics };
};
