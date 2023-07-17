import { Router } from 'express'
import userController from '../controllers/user.controller'

const router = Router()


router.get("/register", userController.register);


export default router