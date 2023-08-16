import { Model } from "mongoose"

export type IPin = {
    pin:  string,
    userEmail: string
}

export type IPinModel = Model<IPin, Record<string, unknown>>