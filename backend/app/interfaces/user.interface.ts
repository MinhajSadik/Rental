import { Model } from "mongoose"

export type IUser = {
    name: string,
    email: string,
    phoneNumber: string,
    password: string
}

export type IUserModel = Model<IUser, Record<string, unknown>>