interface UploadedFile {
    fieldname: string;
    originalname: string;
    encoding: string;
    mimetype: string;
    size: number;
    destination: string;
    filename: string;
    path: string;
}
  
interface CustomRequest extends Request {
  file: UploadedFile;
}

declare global {
    namespace Express {
      interface Request {
        file: CustomRequest;
      }
    }
  }