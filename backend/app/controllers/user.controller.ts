import { NextFunction, Request, Response } from "express";
import  { IGenericResponse, handleResponse } from "../utils/sendResponse";
import httpStatus from "http-status";
import UserService from "../services/user.service";

class UserController {

  async register (req: Request, res: Response, next: NextFunction) {
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

  async login  (req: Request, res: Response, next: NextFunction) {
    try {
      const { refreshToken, ...others } = await UserService.login(req.body);
      // set the refresh token to the cookie
      res.cookie("refreshToken", refreshToken);
      return handleResponse.sendResponse(res, others as IGenericResponse);
    } catch (error) {
      next(error);
    }
  };

  async verifyOTP (req: Request, res: Response, next: NextFunction) {
      try {
        const result = await UserService.verifyOTP(req.body.pin)
        return handleResponse.sendResponse(res, result as IGenericResponse);
      } catch (error) {
      next(error)
      }
  }

  async changePassword (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UserService.changePassword(req.body);
      return handleResponse.sendResponse(res, result as IGenericResponse);
    } catch (error) {
      next(error);
    }
  };

  async auth (req: Request, res: Response, next: NextFunction) {
    try {
      const token = req.headers.authorization as string
     
      const result = await UserService.auth(token);
      return handleResponse.sendResponse(res, result as IGenericResponse);
    } catch (error) {
      next(error)
    }
  }
  
  async refreshToken (req: Request, res: Response, next: NextFunction) {
    try {
      const refreshToken = req.headers.authorization as string
      const result = await UserService.refreshToken(refreshToken)
      return handleResponse.sendResponse(res, result as IGenericResponse);
    } catch (error) {
      next(error)
    }
  }

  async updateProfile  (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UserService.updateProfile(req.body)
      return handleResponse.sendResponse(res, result as IGenericResponse);
    } catch (error) {
      next(error)
    }
  }

  async allUsers (req: Request, res: Response, next: NextFunction) {
    try {
      const result = await UserService.allUsers();
      return handleResponse.sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Users retrieved successfully",
        data: result
      })
    } catch (error) {
      next(error)
    }
  }
}

export default new UserController();
