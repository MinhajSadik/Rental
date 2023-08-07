import { Model } from "mongoose"

export type IPin = {
    pin:  string,
    expireAt: string | number,
    userEmail: string
}

export type IPinModel = Model<IPin, Record<string, unknown>>