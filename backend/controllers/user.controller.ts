import { Request, Response } from "express";

class UserController {
  async register(req: Request, res: Response): Promise<any> {
    try {
      return res.status(200).json({
        message: "Registration will open soon!",
      });
    } catch (error) {
      if (error instanceof Error) {
        res.status(500).json(error.message);
      }
    }
  }

  async login(req: Request, res: Response): Promise<any> {
    try {
    } catch (error) {
      if (error instanceof Error) {
      }
    }
  }
}

export default new UserController();
