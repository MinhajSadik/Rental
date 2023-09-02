/* eslint-disable prettier/prettier */

import { Controller, Req, Post, Get } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';



@Controller('/api/v1/auth/')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post("login")
    async login (@Req() req: Request) {
        const {emailOrPhone, password} = req.body
        const result = await this.authService.login(emailOrPhone, password)
        return result
    }

    @Get()
    async auth(@Req() req: Request){
        const token = req.headers.authorization
        const result = await this.authService.auth(token)
        return result
    }
}