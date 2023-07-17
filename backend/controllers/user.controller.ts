import { Request, Response } from "express";

class UserController {
  async register(req: Request, res: Response): Promise<any> {
    try {
      return res.status(200).json("OKAY");
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  }
}

export default new UserController();
