/* eslint-disable prettier/prettier */
export interface IResponse {
    statusCode: number | string,
    success: boolean,
    message: string,
    data: any
}

export interface IJwtPayload {
    userId: string,
    email: string,
    role: string
}
