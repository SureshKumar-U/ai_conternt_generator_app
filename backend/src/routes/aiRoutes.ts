import {Router} from "express"
import { validateBody } from "../middlewares/validator"
import { generateContentSchema } from "../dtos/aiContent.dto"
import { generateContentHandler } from "../controllers/aiController"
import { isAuthenticated } from "../middlewares/isAuthenticated"
const aiRouter = Router()

aiRouter.post("/generate",isAuthenticated, validateBody(generateContentSchema),  generateContentHandler)
export default aiRouter;