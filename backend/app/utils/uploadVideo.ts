import  {Request, Response, NextFunction} from "express"
import { handleResponse } from "./sendResponse";
import httpStatus from "http-status";


async function uploadVideo (req: Request, res: Response, next: NextFunction) {
    if (!req.file) {
        return res.status(400).send('No file uploaded.');
    }
    const videoUrl = req.file.path;
    return handleResponse.sendResponse(res, {
        statusCode: httpStatus.OK,
        success: true,
        message: "Video uploaded ssuccessfully!",
        data: videoUrl
    })
}

export default uploadVideo