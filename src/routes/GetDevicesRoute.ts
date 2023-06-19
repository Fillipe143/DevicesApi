import { Request, Response } from "express";
import { Route } from "./Route";
import { Device, QueryDeviceFilter } from "../entities";
import { deviceRepository } from "../repositories";

class GetDevicesRoute implements Route {
    public async home(req: Request, res: Response): Promise<void> {
        const deviceFilter = QueryDeviceFilter.safeParse(req.query);

        if (deviceFilter.success) {
            deviceRepository.get(deviceFilter.data)
                .then((devices: Device[]) => GetDevicesRoute.result(res, 200, "Successful", devices))
                .catch(() => GetDevicesRoute.result(res, 500, "Internal Server Error"));
        } else GetDevicesRoute.result(res, 400, "Bad request");
    }

    private static result(res: Response, status: number, message: string, data?: Device[]): void {
        res.status(status).json({ status, message, data });
    }
}

export const getDevicesRoute = new GetDevicesRoute();