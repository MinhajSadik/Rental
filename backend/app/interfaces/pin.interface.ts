import { Model } from "mongoose"

export type IPin = {
    pin:  string,
    expireAt: Date,
    userEmail: string
}

export type IPinModel = Model<IPin, Record<string, unknown>>