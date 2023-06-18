import { Request, Response } from "express";

interface Route {
    home(req: Request, res: Response): Promise<void>;
}

export { Route };