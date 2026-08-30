import envConfig from "../config/envConfig";
import { generateContentDto } from "../dtos/aiContent.dto";
import { GoogleGenAI } from "@google/genai";

const geminiAi = new GoogleGenAI({ apiKey: envConfig.GEMINIAI_API_KEY });




export const generateContent = async (dto: generateContentDto) => {
    const { prompt } = dto;

    const response = await geminiAi.models.generateContent({
        model: "gemini-2.5-flash",
        contents:[prompt],
        config:{
            maxOutputTokens:1000
        }
    });
    return response.text;

}