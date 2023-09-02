/* eslint-disable prettier/prettier */
import { PrismaClient } from "@prisma/client"
import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from "@nestjs/jwt";
import { IJwtPayload, IResponse } from "src/interfaces/common";


const prisma = new PrismaClient()

@Injectable()
export class AuthService {
    constructor(
        private jwtService: JwtService
      ) {}

    async login(emailOrPhone: string, password: string): Promise<IResponse>{
        const isUserExist = await prisma.user.findFirstOrThrow({
            where: {
                OR: [
                    {
                        email: emailOrPhone,
                    },
                    {
                        phoneNumber: emailOrPhone,
                    }
                ],
            },
        });

        if (!isUserExist) {
            return {
              statusCode: 404,
              success: false,
              message: "User does not exist",
              data: null,
            };
          }

          const isPasswordMatched = await bcrypt.compare(
            password as string,
            isUserExist.password
          );

          if (!isPasswordMatched) {
            return {
              statusCode: 400,
              success: false,
              message: "Incorrect password",
              data: null,
            };
          }
      
          const jwtPayload: IJwtPayload = {
            userId: isUserExist.id,
            email: isUserExist.email,
            role: isUserExist.role,
          };
      
          const accessToken = await this.jwtService.sign(jwtPayload, {expiresIn: "1d"})
      
          const refreshToken = await this.jwtService.sign(
            jwtPayload,
            {expiresIn: "365d"} 
          );
      
          return {
            statusCode: 200,
            success: true,
            message: "User logged in successfully!",
            data: {
                refreshToken,
                accessToken,
                user: isUserExist
            },
          };
    }

    async auth (token: string) {
        const isValidUser  = await this.jwtService.verify(token, {secret: process.env.JWT_SECRET})
        if(!isValidUser){
          return {
            statusCode: 400,
            success: false,
            message: "Invalid token",
            data: null,
          };
        }
      
        const isUserExist = await prisma.user.findFirstOrThrow({
            where: {
                email: isValidUser.email
            }
        });
        if (!isUserExist) {
          return {
            statusCode: 404,
            success: false,
            message: "User does not exist",
            data: null,
          };
        }
    
        return {
          statusCode: 200,
          success: true,
          message: "User retrieved successfully",
          data: isUserExist,
        };
        
    }
}
