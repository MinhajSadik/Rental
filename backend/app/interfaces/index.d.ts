import { Request } from 'express';

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

declare module 'express' {
  interface Request {
    file: UploadedFile;
  }
}

declare module 'express' {
  interface Request {
    files: UploadedFile[];
  }
}