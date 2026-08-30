
import { Request, Response } from "express"
import * as authService from "../services/authService"
import AsyncHandler from "express-async-handler"
import { LoginUserDto, RegisterUserDto } from "../dtos/auth.dtos";
import { sendSuccess } from "../utils/api.response";
import envConfig from "../config/envConfig";

const authController = {
    register: AsyncHandler(async (req: Request, res: Response) => {
        const userInput: RegisterUserDto = req.body;
        const data = await authService.registerUser(userInput)
        sendSuccess(res, {email:data.email, username:data.username}, 201, "User registerd successfully")
    }),
    login: AsyncHandler(async (req: Request, res: Response) => {
        const loginUserInput: LoginUserDto = req.body
        const data = await authService.loginUser(loginUserInput)
        res.cookie("token", data, {
            httpOnly: true,
            secure: envConfig.NODE_ENV != "development",
            sameSite: "strict",
            maxAge: 1 * 24 * 60 * 60 * 60   // 1 day in milli seconds
        })
        sendSuccess(res, data, 200, "user login successfully")
    }),
    logOut: AsyncHandler(async (req: Request, res: Response) => {
        res.clearCookie("token", {
            httpOnly: true,
            secure: envConfig.NODE_ENV !== "development",
            sameSite: "strict",
        });
        sendSuccess(res, null, 200, "user Logout successfully")
    }),
    getUserProfile: AsyncHandler(async (req: Request, res: Response) => {
        const data = await authService.getUserProfile(req.userId)
        sendSuccess(res,data,200,"user profile fetched succesfully")
  
    })


}



export default authController