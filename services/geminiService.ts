import { GoogleGenAI } from "@google/genai";

export const callGeminiAgent = async (
  apiKey: string,
  modelName: string,
  systemInstruction: string,
  prompt: string,
  maxTokens: number
): Promise<string> => {
  try {
    const ai = new GoogleGenAI({ apiKey });
    
    // Fallback logic for model names if needed, but sticking to spec models
    // Using gemini-3-flash-preview as the default efficient model
    const targetModel = modelName.includes('gemini') ? modelName : 'gemini-3-flash-preview';

    const response = await ai.models.generateContent({
      model: targetModel,
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        maxOutputTokens: maxTokens,
        temperature: 0.2
      }
    });

    return response.text || "No response generated.";
  } catch (error: any) {
    console.error("Gemini API Error:", error);
    return `Error calling Gemini: ${error.message}`;
  }
};
