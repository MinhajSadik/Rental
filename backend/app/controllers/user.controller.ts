import { NextFunction, Request, Response } from "express";
import { UserService } from "../services/user.service";

const register =  async (req: Request, res: Response, next: NextFunction)=> {
  try {
    const user = req.body;
    const createdUser = await UserService.register(user)
    return res.status(200).json({
      success:  true,
      message: "User registration successful!",
      data: createdUser
    });
  } catch (error) {
    next(error)
  }
}

const login =  async (req: Request, res: Response,  next: NextFunction): Promise<any> => {
  try {
  } catch (error) {
    next(error)
  }
}


export const UserController = {
  register,
  login
};
