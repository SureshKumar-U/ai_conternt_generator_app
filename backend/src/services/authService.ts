import AsyncHandler from "express-async-handler"
import userModel from "./../models/User"
import { BadRequest, UnauthorizedUser, notFound } from "../utils/api.error";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import envConfig from "../config/envConfig";
import { LoginUserDto, RegisterUserDto } from "../dtos/auth.dtos";
//replace data with types (dtos) later


export const loginUser = async (loginUserInput: LoginUserDto) => {
    const { email, password } = loginUserInput
    const existedUser = await userModel.findOne({ email: email }).select("email password");
    if (!existedUser) {
        throw UnauthorizedUser();
    }
    const isPasswordMatch = await bcrypt.compare(password, existedUser.password);
    if (!isPasswordMatch) {
        throw UnauthorizedUser();
    }
    const token = jwt.sign({ id: existedUser?._id }, envConfig.JWT_SECRET, {
        expiresIn: "2d", //token expires in 3 days
    })
    return token

};
export const registerUser = async (data: RegisterUserDto) => {
    const { email, username, password } = data
    const existedUser = await userModel.findOne({ email: email });
    if (existedUser) {
        throw BadRequest("user already have an account");
    }
    const encryptedPassword = await bcrypt.hash(password, 18);
    const traiExpireDate  =  new Date( new Date().getTime() +  3 * 24 * 60 * 60 * 1000)
    const newUser = (await userModel.create({ username, email, password:encryptedPassword ,trialExpires:traiExpireDate}));
    return newUser;

};
export const getUserProfile = async(userId:string) => {
    const user = await userModel.findById(userId).select("-password");
    if(!user){
        throw notFound(`no user found with these id: ${userId}`);
    }
    return user;

}





