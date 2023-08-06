import { Model } from "mongoose"

export type IPin = {
    pin:  string,
    expireAt: string,
    userEmail: string
}

export type IPinModel = Model<IPin, Record<string, unknown>>