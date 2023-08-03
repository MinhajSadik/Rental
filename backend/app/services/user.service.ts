import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import bcrypt from "bcrypt"
import  httpStatus  from 'http-status';
import  jwt, { Secret }  from 'jsonwebtoken';

const register = async(user: IUser): Promise<IUser> => {
    // hash user password
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword
    const newUser = await User.create(user);
    return newUser
}

const login = async(user: Partial<IUser>) => {
    // check weather the user exist in database or not
    const isUserExist = await User.findOne({email: user.email});
    if(!isUserExist){
        return {
            statusCode: httpStatus.NOT_FOUND,
            success: false,
            message: "User does not exist",
            data: null
        }
    }
    // match password
    const isPasswordMatched = await bcrypt.compare(user.password as string, isUserExist.password);
    if(!isPasswordMatched){
        return {
            statusCode: httpStatus.BAD_REQUEST,
            success: false,
            message: "Incorrect password",
            data: null
        }
    }

    // generate access token and refresh token
    const jwtPayload = {
        userId: isUserExist._id,
        email: isUserExist.email,
        role: isUserExist.role
    }
    
    const accessToken = await jwt.sign(jwtPayload, process.env.JWT_SECRET as Secret);
    const refreshToken = await jwt.sign(jwtPayload, process.env.JWT_REFRESH_SECRET as Secret);

    return {
        statusCode: httpStatus.OK,
        success: true,
        message: "User logged in successfully!",
        refreshToken,
        data: {
            accessToken
        }
    }
}

export const UserService = {
    register,
    login
}