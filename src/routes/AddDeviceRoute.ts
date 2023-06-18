import { Request, Response } from "express";
import { Route } from "./Route";

class AddDeviceRoute implements Route {
    home(req: Request, res: Response): void {
        res.status(200).json({ message: "Successful" });
    }
}

export const addDeviceRoute = new AddDeviceRoute();