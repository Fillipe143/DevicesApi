import { Router } from "express";
import { addDeviceRoute, getDevicesRoute } from "../routes";

const router = Router();

router.get("/api/add", addDeviceRoute.home);
router.get("/api/get", getDevicesRoute.home);

export { router };