import { Response } from "express"

export type IGenericResponse  = {
    statusCode: number, 
    success: boolean, 
    message: string ,
    data: any
}

const sendResponse = (res: Response , data: IGenericResponse)  => {
    return res.status(data.statusCode).json({
        statusCode: data.statusCode,
        success: data.success,
        message: data.message,
        data: data.data
    })
}

export default sendResponse