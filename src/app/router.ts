import { Router } from "express";
import { addDeviceRoute } from "../routes";

const router = Router();

router.get("/api/add", addDeviceRoute.home);

export { router };