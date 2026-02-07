export interface MedFlowRow {
  Deliverdate: string;
  Number: number;
  DeviceNAME: string;
  SupplierID: string;
  CustomerID: string;
  Category: string;
  parsedDate: Date | null;
  id: string; // internal ID
  // New standard fields
  LicenseNo: string;
  UDID: string;
  LotNO: string;
  SerNo: string; // SN
  Model: string;
}

export interface DataMetrics {
  totalRows: number;
  totalUnits: number;
  uniqueSuppliers: number;
  uniqueCustomers: number;
  uniqueCategories: number;
  dateRange: [Date | null, Date | null];
  missingValues: Record<string, number>;
  parseFailures: number;
}

export type SkinType = 
  | 'Monet' | 'VanGogh' | 'Hokusai' | 'Klimt' | 'Picasso' 
  | 'Kandinsky' | 'Rothko' | 'Vermeer' | 'Caravaggio' | 'Matisse'
  | 'Dali' | 'Magritte' | 'Turner' | 'Kusama' | 'Hopper'
  | 'OKeeffe' | 'Basquiat' | 'Mondrian' | 'UkiyoE' | 'Bauhaus';

export interface SkinDef {
  name: string;
  bgFrom: string;
  bgTo: string;
  accent: string;
  cardBg: string;
  text: string;
  font: string;
}

export type Lang = 'en' | 'zh-TW';

export interface AgentStep {
  id: string;
  name: string;
  provider: 'gemini' | 'openai' | 'anthropic' | 'grok';
  model: string;
  system_prompt: string;
  user_prompt_template: string;
  max_tokens: number;
  status: 'idle' | 'running' | 'completed' | 'error';
  output: string;
  editedOutput?: string;
}

export interface AgentPipeline {
  defaults: {
    temperature: number;
    max_tokens: number;
  };
  agents: AgentStep[];
}

export interface GlobalFilters {
  dateRange: [string, string];
  topN: number;
  searchSupplier: string; // acts as SupplierID filter
  // New filters
  category: string;
  licenseNo: string;
  model: string;
  lotNo: string;
  serNo: string;
  customerID: string;
  timeZone: string;
}
