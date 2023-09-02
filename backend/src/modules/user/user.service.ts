/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { User , PrismaClient} from "@prisma/client";
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient()

@Injectable()
export class UserService {

    async createUser(data: User): Promise<User>{
        // hash password
        const hashedPassword = await bcrypt.hash(data.password, 12)
        data.password = hashedPassword
        const result = await prisma.user.create({
            data
        });
        return result
    }

    async getUsers(): Promise<User[]>{
        const result = await prisma.user.findMany();
        return result
    }

    async getSingleUser(id: string): Promise<User>{
        const result = await prisma.user.findUnique({
            where: {
                id
            }
        })
        return result
    }

    async deleteUser(id: string): Promise<User>{
        const result = await prisma.user.delete({
            where: {
                id
            }
        })
        return result
    }

    async updateUser(id: string, payload: Partial<User>): Promise<User>{
        const result = await prisma.user.update({
            where: {
                id
            },
            data: payload
        })
        return result
    }
}