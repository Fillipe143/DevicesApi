import { prisma } from "../app/prismaInstance";
import { Device } from "../entities";

class DeviceRepository {
    public async add(device: Device): Promise<Device> {
        return await prisma.device.create({ data: device });
    }
}

export const deviceRepository = new DeviceRepository();