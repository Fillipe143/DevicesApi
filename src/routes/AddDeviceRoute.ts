import { Request, Response } from "express";
import { Route } from "./Route";

class AddDeviceRoute implements Route {
    async home(req: Request, res: Response): Promise<void> {
        res.status(200).json({ message: "Successful" });
    }
}

export const addDeviceRoute = new AddDeviceRoute();