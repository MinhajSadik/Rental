import { NextFunction, Request, Response } from "express";
import  { IGenericResponse, handleResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import UserService from "../services/user.service";

class UserController {
  register = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const user = req.body;
      const createdUser = await UserService.register(user);
      return handleResponse.sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "User registration successful!",
        data: createdUser,
      });
    } catch (error) {
      next(error);
    }
  };

  login = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const { refreshToken, ...others } = await UserService.login(req.body);
      // set the refresh token to the cookie
      res.cookie("refreshToken", refreshToken);
      return handleResponse.sendResponse(res, others as IGenericResponse);
    } catch (error) {
      next(error);
    }
  };

  forgetPassword = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const result = await UserService.forgetPassword(req.body);
      return handleResponse.sendResponse(res, result as IGenericResponse);
    } catch (error) {
      next(error);
    }
  };
}

export default new UserController();
