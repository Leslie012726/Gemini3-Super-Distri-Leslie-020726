import { SkinDef, SkinType, Lang } from './types';

export const SKINS: Record<SkinType, SkinDef> = {
  Monet: { name: 'Monet', bgFrom: '#A8C0D0', bgTo: '#D8E4E8', accent: '#708898', cardBg: 'rgba(255, 255, 255, 0.4)', text: '#2C3E50', font: 'font-serif' },
  VanGogh: { name: 'Van Gogh', bgFrom: '#1c2541', bgTo: '#f4d35e', accent: '#f4a261', cardBg: 'rgba(28, 37, 65, 0.7)', text: '#ffffff', font: 'font-sans' },
  Hokusai: { name: 'Hokusai', bgFrom: '#2b2d42', bgTo: '#8d99ae', accent: '#ef233c', cardBg: 'rgba(237, 242, 244, 0.8)', text: '#2b2d42', font: 'font-serif' },
  Klimt: { name: 'Klimt', bgFrom: '#4a4e69', bgTo: '#c9ada7', accent: '#d4af37', cardBg: 'rgba(34, 34, 59, 0.8)', text: '#f2e9e4', font: 'font-serif' },
  Picasso: { name: 'Picasso', bgFrom: '#457b9d', bgTo: '#a8dadc', accent: '#e63946', cardBg: 'rgba(241, 250, 238, 0.6)', text: '#1d3557', font: 'font-sans' },
  Kandinsky: { name: 'Kandinsky', bgFrom: '#e9c46a', bgTo: '#264653', accent: '#e76f51', cardBg: 'rgba(255, 255, 255, 0.8)', text: '#264653', font: 'font-mono' },
  Rothko: { name: 'Rothko', bgFrom: '#9d0208', bgTo: '#e85d04', accent: '#ffba08', cardBg: 'rgba(0, 0, 0, 0.3)', text: '#ffffff', font: 'font-sans' },
  Vermeer: { name: 'Vermeer', bgFrom: '#003049', bgTo: '#669bbc', accent: '#fdf0d5', cardBg: 'rgba(0, 48, 73, 0.8)', text: '#fdf0d5', font: 'font-serif' },
  Caravaggio: { name: 'Caravaggio', bgFrom: '#000000', bgTo: '#3d405b', accent: '#f2cc8f', cardBg: 'rgba(0, 0, 0, 0.7)', text: '#f4f1de', font: 'font-serif' },
  Matisse: { name: 'Matisse', bgFrom: '#e63946', bgTo: '#f1faee', accent: '#1d3557', cardBg: 'rgba(255, 255, 255, 0.6)', text: '#1d3557', font: 'font-sans' },
  Dali: { name: 'Dali', bgFrom: '#5f0f40', bgTo: '#9a031e', accent: '#fb8b24', cardBg: 'rgba(255, 255, 255, 0.2)', text: '#e36414', font: 'font-serif' },
  Magritte: { name: 'Magritte', bgFrom: '#8ecae6', bgTo: '#219ebc', accent: '#023047', cardBg: 'rgba(255, 255, 255, 0.5)', text: '#023047', font: 'font-sans' },
  Turner: { name: 'Turner', bgFrom: '#353535', bgTo: '#d9d9d9', accent: '#ffc300', cardBg: 'rgba(60, 60, 60, 0.6)', text: '#ffffff', font: 'font-serif' },
  Kusama: { name: 'Kusama', bgFrom: '#d00000', bgTo: '#ffffff', accent: '#000000', cardBg: 'rgba(255, 255, 255, 0.9)', text: '#000000', font: 'font-mono' },
  Hopper: { name: 'Hopper', bgFrom: '#001219', bgTo: '#0a9396', accent: '#e9d8a6', cardBg: 'rgba(0, 18, 25, 0.8)', text: '#e9d8a6', font: 'font-sans' },
  OKeeffe: { name: 'O\'Keeffe', bgFrom: '#ffcdb2', bgTo: '#e5989b', accent: '#6d6875', cardBg: 'rgba(255, 255, 255, 0.5)', text: '#6d6875', font: 'font-sans' },
  Basquiat: { name: 'Basquiat', bgFrom: '#10002b', bgTo: '#240046', accent: '#ff9e00', cardBg: 'rgba(0, 0, 0, 0.8)', text: '#ffffff', font: 'font-mono' },
  Mondrian: { name: 'Mondrian', bgFrom: '#ffffff', bgTo: '#f0f0f0', accent: '#d90429', cardBg: 'rgba(255, 255, 255, 0.95)', text: '#2b2d42', font: 'font-sans' },
  UkiyoE: { name: 'Ukiyo-e', bgFrom: '#d8e2dc', bgTo: '#ffe5d9', accent: '#f4acb7', cardBg: 'rgba(255, 255, 255, 0.7)', text: '#9d8189', font: 'font-serif' },
  Bauhaus: { name: 'Bauhaus', bgFrom: '#edf2f4', bgTo: '#8d99ae', accent: '#ef233c', cardBg: 'rgba(237, 242, 244, 0.9)', text: '#2b2d42', font: 'font-sans' },
};

export const I18N: Record<Lang, Record<string, string>> = {
  en: {
    dashboard: "Dashboard",
    network: "Network",
    agents: "Agents",
    data: "Data Manager",
    config: "Config",
    quality: "Quality",
    upload: "Upload Dataset",
    loadDefault: "Load System Default",
    parse: "Parse Data",
    preview: "Data Preview",
    rows: "Rows",
    units: "Total Units",
    suppliers: "Suppliers",
    customers: "Customers",
    categories: "Categories",
    runPipeline: "Run Pipeline",
    runStep: "Run Step",
    step: "Step",
    theme: "Theme",
    skin: "Skin",
    jackpot: "Jackpot!",
    noData: "No data loaded. Please upload, paste, or load default dataset.",
    parsing: "Parsing...",
    apiKeyPlaceholder: "Enter Gemini API Key (Required)",
    apiKeyFound: "API Key detected in Environment",
    runAll: "Run All Agents",
    reset: "Reset",
    topN: "Top N",
    filterDate: "Date Range",
    statusReady: "Ready",
    statusRunning: "Running",
    statusComplete: "Complete",
    statusError: "Error",
    filters: "Filters",
    dropFile: "Drop file here or click to upload (CSV, JSON, TXT)",
  },
  "zh-TW": {
    dashboard: "儀表板",
    network: "網絡圖",
    agents: "代理人",
    data: "數據管理",
    config: "配置",
    quality: "質量報告",
    upload: "上傳數據集",
    loadDefault: "加載系統默認",
    parse: "解析數據",
    preview: "數據預覽",
    rows: "行數",
    units: "總單位",
    suppliers: "供應商",
    customers: "客戶",
    categories: "類別",
    runPipeline: "執行流程",
    runStep: "執行步驟",
    step: "步驟",
    theme: "主題",
    skin: "風格",
    jackpot: "手氣不錯!",
    noData: "無數據。請上傳、粘貼或加載默認數據集。",
    parsing: "解析中...",
    apiKeyPlaceholder: "輸入 Gemini API 金鑰 (必填)",
    apiKeyFound: "檢測到環境變量金鑰",
    runAll: "執行所有代理",
    reset: "重置",
    topN: "前 N 項",
    filterDate: "日期範圍",
    statusReady: "就緒",
    statusRunning: "執行中",
    statusComplete: "完成",
    statusError: "錯誤",
    filters: "篩選器",
    dropFile: "拖放文件至此或點擊上傳 (CSV, JSON, TXT)",
  }
};

export const DEFAULT_SAMPLE_CSV = `Deliverdate,Number,DeviceNAME,SupplierID,CustomerID,Category
20231001,150,"Stent-X Pro",SUP001,CUST-A,Cardiac
20231002,200,"DermaFix",SUP002,CUST-B,Dermatology
20231003,50,"Stent-X Pro",SUP001,CUST-C,Cardiac
20231004,300,"Ortho-Screw",SUP003,CUST-A,Orthopedic
20231005,120,"Neuro-Clip",SUP004,CUST-D,Neurology
20231006,80,"Stent-X Lite",SUP001,CUST-B,Cardiac
20231007,500,"Bandage-L",SUP002,CUST-E,General
20231008,-10,"Stent-X Pro",SUP001,CUST-A,Cardiac
`;

export const DEFAULT_FULL_DATASET = `SupplierID,Deliverdate,CustomerID,LicenseNo,Category,UDID,DeviceNAME,LotNO,SerNo,Model,Number
B00079,20251107,C05278,衛部醫器輸字第033951號,E.3610植入式心律器之脈搏產生器,00802526576331,“波士頓科技”英吉尼心臟節律器,890057,,L111,1
B00079,20251106,C06030,衛部醫器輸字第033951號,E.3610植入式心律器之脈搏產生器,00802526576331,“波士頓科技”英吉尼心臟節律器,872177,,L111,1
B00079,20251106,C00123,衛部醫器輸字第033951號,E.3610植入式心律器之脈搏產生器,00802526576331,“波士頓科技”英吉尼心臟節律器,889490,,L111,1
B00079,20251105,C06034,衛部醫器輸字第033951號,E.3610植入式心律器之脈搏產生器,00802526576331,“波士頓科技”英吉尼心臟節律器,889253,,L111,1
B00079,20251103,C05363,衛部醫器輸字第029100號,E.3610植入式心律器之脈搏產生器,00802526576461,“波士頓科技”艾科雷心臟節律器,869531,,L311,1
B00079,20251103,C06034,衛部醫器輸字第033951號,E.3610植入式心律器之脈搏產生器,00802526576331,“波士頓科技”英吉尼心臟節律器,889230,,L111,1
B00079,20251103,C05278,衛部醫器輸字第029100號,E.3610植入式心律器之脈搏產生器,00802526576485,“波士頓科技”艾科雷心臟節律器,182310,,L331,1
B00051,20251030,C02822,衛部醫器輸字第028560號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606478,“尼奧麥迪克”舒兒莉芙特骨盆懸吊系統,CC250520,19,CPS02,1
B00079,20251030,C00123,衛部醫器輸字第033951號,E.3610植入式心律器之脈搏產生器,00802526576324,“波士頓科技”英吉尼心臟節律器,915900,,L110,1
B00051,20251030,C02822,衛部醫器輸字第028560號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606478,“尼奧麥迪克”舒兒莉芙特骨盆懸吊系統,CC250520,20,CPS02,1
B00051,20251029,C02082,衛部醫器輸字第028560號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606478,“尼奧麥迪克”舒兒莉芙特骨盆懸吊系統,CC250326,4,CPS02,1
B00051,20251029,C02082,衛部醫器輸字第028560號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606478,“尼奧麥迪克”舒兒莉芙特骨盆懸吊系統,CC250326,5,CPS02,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012150,Calistar S,1
B00051,20251028,C01774,衛部醫器輸字第030820號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606515,“尼奧麥迪克”蜜普思微創骨盆懸吊系統,MB241203,140,KITMIPS02,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012154,Calistar S,1
B00051,20251028,C01773,衛部醫器輸字第028560號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606478,“尼奧麥迪克”舒兒莉芙特骨盆懸吊系統,CC241128,85,CPS02,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012155,Calistar S,1
B00051,20251028,C01774,衛部醫器輸字第030820號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,08437007606515,“尼奧麥迪克”蜜普思微創骨盆懸吊系統,MB241203,142,KITMIPS02,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012156,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012158,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012161,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012162,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012163,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012164,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012179,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012181,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012182,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012183,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012184,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012185,Calistar S,1
B00209,20251028,C03210,衛部醫器輸字第026988號,L.5980經陰道骨盆腔器官脫垂治療用手術網片,07798121803473,“博美敦”凱莉星脫垂修補系統,,00012186,Calistar S,1`;

export const DEFAULT_AGENTS_YAML = `version: "1.1"
defaults:
  temperature: 0.2
  max_tokens: 2000
agents:
  - id: "01_summary"
    name: "01 | Executive Summary"
    provider: "gemini"
    model: "gemini-3-flash-preview"
    system_prompt: "You are a supply chain analyst."
    user_prompt_template: "Analyze the following data summary and identify the top performing category. Data Summary: {{data_summary}}"
    max_tokens: 1000
  - id: "02_anomalies"
    name: "02 | Anomaly Detection"
    provider: "gemini"
    model: "gemini-3-flash-preview"
    system_prompt: "You are a risk manager."
    user_prompt_template: "Based on the previous analysis: {{previous_output}}, identify potential risks in supply continuity."
    max_tokens: 1000
`;

export const DEFAULT_SKILL_MD = `# SKILL.md

## Core Rules
1. Never reveal API keys.
2. Assume date format YYYYMMDD unless specified otherwise.
3. Treat negative numbers as returns.

## Output Format
- Use Markdown.
- Use bullet points for lists.
- Be concise.
`;
