import * as z from "zod";



export const registerSchema = z.object({
    username:z.string().min(2,"Name must be atleast 2 characters"),
    email:z.string().email({message:"Invalid email address"}),
    password:z.string().min(8,"Password must be at least 8 characters")
});

export const loginSchema = z.object({
    email:z.string().email("Invalid email address"),
    password:z.string().min(8, "Password must be at least 8 charcters")
});


export type  RegisterUserDto = z.infer<typeof registerSchema>;
export type  LoginUserDto = z.infer<typeof loginSchema>;