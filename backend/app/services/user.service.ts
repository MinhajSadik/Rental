import { IUser } from "../interfaces/user.interface";
import { User } from "../models/user.model";
import bcrypt from "bcrypt"

const register = async(user: IUser): Promise<IUser> => {
    // hash user password
    const hashedPassword = await bcrypt.hash(user.password, 12);
    user.password = hashedPassword
    const newUser = await User.create(user);
    return newUser
}

export const UserService = {
    register
}