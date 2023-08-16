import { Model, Types } from "mongoose"

export type IUser = {
    name: string,
    email: string,
    phoneNumber: string,
    password: string,
    role: string,
    IDCard: {
        front: string,
        back: string
    },
    isVerified: boolean,
    profile: string
}

export type IUserModel = Model<IUser, Record<string, unknown>>


export type ILogin = {
    emailOrPhone: string,
    password: string
}

export type IJwtPayload = {
    userId: Types.ObjectId,
    email: string,
    role: string,
}