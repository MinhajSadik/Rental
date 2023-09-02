/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Param, Delete, Patch, Req} from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from '@prisma/client';
import { Request } from "express";

@Controller("api/v1/user/")
export class UserController {
    constructor (private readonly userService: UserService){}
    @Post("register")
    async createUser(@Req() req: Request){
        const result = await this.userService.createUser(req.body)
        return {
            success: true,
            message: "User created successfully!",
            data: result
        }
    }

    @Get()
    async getUsers () {
        const result = await this.userService.getUsers();
        return {
            success: true,
            message: "Users fetched successfully!",
            data: result
        }
    }

    @Get(":id")
    async getSingleUser(@Param("id") id: string) {
        console.log("Single user")
        const result = await this.userService.getSingleUser(id);
        return {
            success: true,
            message: "User fetched successfully!",
            data: result
        }
    }

    @Delete(":id")
    async deleteUser(@Param("id") id: string){
        const result = await this.userService.deleteUser(id)
        return {
            success: true,
            message: "User deleted successfully!",
            data: result
        }
    }

    @Patch(":id")
    async updateUser(@Param("id") id: string, @Req() req: Request){
        const payload = req.body as Partial<User>
        const result = await this.userService.updateUser(id, payload)
        return {
            success: true,
            message: "User updated successfully!",
            data: result
        }
    }
    
}