import express from "express"
import authController from "./../controllers/authController"
import { validateBody } from "../middlewares/validator"
import { loginSchema, registerSchema } from "../dtos/auth.dtos"
import { isAuthenticated } from "../middlewares/isAuthenticated"

const userRouter = express.Router() 

userRouter.post("/login", validateBody(loginSchema), authController.login)
userRouter.get("/user", isAuthenticated, authController.getUserProfile)
userRouter.post("/logout", authController.logOut)
userRouter.post("/register", validateBody(registerSchema), authController.register)

export default userRouter


