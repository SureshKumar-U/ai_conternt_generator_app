import envConfig from "../config/envConfig";
import { generateContentDto } from "../dtos/aiContent.dto";
import { GoogleGenAI } from "@google/genai";
import ContentHistory from "../models/ContentHistory";
import User from "../models/User";

const geminiAi = new GoogleGenAI({ apiKey: envConfig.GEMINIAI_API_KEY });

export const generateContent = async (dto: generateContentDto): Promise<string> => {
    const { prompt } = dto;

    const response = await geminiAi.models.generateContent({
        model: "gemini-2.5-flash",
        contents: [prompt],
        config: {
            maxOutputTokens: 1000
        }
    });
    return response?.text || "";
};

export const saveContentHistory = async (userId: string, ai_response: string) => {
    const newContent = await ContentHistory.create({
        user: userId.toString(),
        content: ai_response
    })
    const user = await User.findById(userId);
    if (user) {
        user.contentHistory.push(newContent._id)
        user.apiRequestCount += 1
       await user.save();
    }
    
}



