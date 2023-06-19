import { Request, Response } from "express";
import { Route } from "./Route";
import { QueryDevice } from "../entities";
import { deviceRepository } from "../repositories";

class AddDeviceRoute implements Route {
    public async home(req: Request, res: Response): Promise<void> {
        const device = QueryDevice.safeParse(req.query);

        if (device.success) {
            deviceRepository.add(device.data)
                .then(() => {
                    console.log("Device added successfully:");
                    console.table([device.data]);
                    AddDeviceRoute.result(res, 200, "Successful");
                })
                .catch((error) => {
                    console.error("Error adding device:", error);
                    AddDeviceRoute.result(res, 500, "Internal Server Error");
                });
        } else {
            console.warn("Invalid device request:", device.error);
            AddDeviceRoute.result(res, 400, "Bad request");
        }
    }

    private static result(res: Response, status: number, message: string): void {
        res.status(status).json({ status, message });
    }
}

export const addDeviceRoute = new AddDeviceRoute();