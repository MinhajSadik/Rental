import { ZodError, ZodIssue } from "zod";
import { IGenericError } from "../interfaces/error.interface";

const handleZodError = (errors: ZodError) => {
    const simplifiedErrors: IGenericError[]  = errors.issues.map((error: ZodIssue) => {
        return {path: error.path[1] as string, message: error.message}
    })
    return simplifiedErrors
}

export default handleZodError