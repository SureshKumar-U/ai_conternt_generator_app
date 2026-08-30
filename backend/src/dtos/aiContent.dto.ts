import * as z from "zod";


export const generateContentSchema = z.object({
    prompt: z.string().trim().min(1, "Prompt cannot be empty"),
})

export type generateContentDto = z.infer<typeof generateContentSchema>