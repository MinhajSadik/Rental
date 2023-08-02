import { NextFunction, Request, Response } from "express";
import sendResponse, { IGenericResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import { UserService } from './../services/user.service';

const register =  async (req: Request, res: Response, next: NextFunction)=> {
  try {
    const user = req.body;
    const createdUser = await UserService.register(user)
    console.log("From Controller", user)
    return sendResponse(res, {
      statusCode: httpStatus.OK,
      success:  true,
      message: "User registration successful!",
      data: createdUser
    })
  } catch (error) {
    next(error)
  }
}

const login =  async (req: Request, res: Response,  next: NextFunction) => {
  try {
    const result = await UserService.login(req.body)
    return sendResponse(res, result as IGenericResponse)
  } catch (error) {
    next(error)
  }
}


export const UserController = {
  register,
  login
};
