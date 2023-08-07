import { IJwtPayload, IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import bcrypt from "bcrypt";
import httpStatus from "http-status";
import jwt, { JwtPayload, Secret } from "jsonwebtoken";


class UserService {
  static async register(user: IUser): Promise<IUser> {
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword;
    const newUser = await User.create(user);
    return newUser;
  }
  
  static async login(user: Partial<IUser>) {
    const isUserExist = await User.findOne({ email: user.email });
    if (!isUserExist) {
      return {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: "User does not exist",
        data: null,
      };
    }
    const isPasswordMatched = await bcrypt.compare(
      user.password as string,
      isUserExist.password
    );
    if (!isPasswordMatched) {
      return {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Incorrect password",
        data: null,
      };
    }

    const jwtPayload: IJwtPayload = {
      userId: isUserExist._id,
      email: isUserExist.email,
      role: isUserExist.role,
    };

    const accessToken = await jwt.sign(
      jwtPayload, 
      process.env.JWT_SECRET as Secret, 
      {expiresIn: "1d"}
      );

    const refreshToken = await jwt.sign(
      jwtPayload, 
      process.env.JWT_REFRESH_SECRET as Secret,
      {expiresIn: "1d"}
    );

    return {
      statusCode: httpStatus.OK,
      success: true,
      message: "User logged in successfully!",
      refreshToken,
      data: {
        accessToken,
      },
    };
  }

  static async forgetPassword(user: Partial<IUser>) {
    const isUserExist = await User.findOne({ email: user.email });
    if (!isUserExist) {
      return {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: "User does not exist",
        data: null,
      };
    }

    const hashedPassword = await bcrypt.hash(user.password as string, 12);
    const updatedUser = await User.findByIdAndUpdate(
      isUserExist._id,
      { $set: { password: hashedPassword } },
      { new: true }
    );

    return {
      statusCode: httpStatus.OK,
      success: true,
      message: "Password changed successfully",
      data: updatedUser,
    };
  }

  static async auth(token: string) {
    const isValidToken  = await jwt.verify(token,  process.env.JWT_SECRET as Secret) as JwtPayload
    if(!isValidToken){
      return {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Invalid token",
        data: null,
      };
    }
  
    const isUserExist = await User.findOne({ email: isValidToken.email });
    if (!isUserExist) {
      return {
        statusCode: httpStatus.NOT_FOUND,
        success: false,
        message: "User does not exist",
        data: null,
      };
    }

    return {
      statusCode: httpStatus.OK,
      success: true,
      message: "User retrieved successfully",
      data: isUserExist,
    };
    
  }

  static async refreshToken(refreshToken: string){
     if (!refreshToken) {
      return {
        statusCode: httpStatus.BAD_REQUEST,
        success: false,
        message: "Refresh token not provided",
        data: null,
      };
    }

   const isValidToken = await jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET as Secret)
   if(!isValidToken){
    return {
      statusCode: httpStatus.BAD_REQUEST,
      success: false,
      message: "Invalid refresh token",
      data: null,
    };
   }
  // Generate a new access token
  const accessToken = jwt.sign( isValidToken , process.env.JWT_SECRET as Secret, { expiresIn: '1d' });
  return {
    statusCode: httpStatus.OK,
    success: true,
    message: "Token generated successfully!",
    data: {
      accessToken: accessToken
    },
  };
  }
}

export  default UserService;
