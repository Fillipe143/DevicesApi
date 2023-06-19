import { Prisma } from "@prisma/client";
import { prisma } from "../app/prismaInstance";
import { Device, DeviceFilter } from "../entities";

class DeviceRepository {
    public async add(device: Device): Promise<Device> {
        return prisma.device.create({ data: device });
    }

    public async get(filter: DeviceFilter = {}): Promise<Device[]> {
        const deviceWhereInput = this.getDeviceWhereInput(filter);
        return prisma.device.findMany({ where: deviceWhereInput });
    }

    private getDeviceWhereInput(filter: DeviceFilter): Prisma.DeviceWhereInput {
        const idFilter: Prisma.IntFilter = {};
        const ssidFilter: Prisma.StringFilter = {};
        const macFilter: Prisma.StringFilter = {};
        const rssiFilter: Prisma.IntFilter = {};
        const channelFilter: Prisma.IntFilter = {};
        const createdAtFilter: Prisma.DateTimeFilter = {};

        if (filter.id !== undefined) idFilter.equals = filter.id;
        if (filter.min_id !== undefined) idFilter.gte = filter.min_id;
        if (filter.max_id !== undefined) idFilter.lte = filter.max_id;

        if (filter.ssid !== undefined) ssidFilter.equals = filter.ssid;
        if (filter.mac !== undefined) macFilter.equals = filter.mac;

        if (filter.rssi !== undefined) rssiFilter.equals = filter.rssi;
        if (filter.min_rssi !== undefined) rssiFilter.gte = filter.min_rssi;
        if (filter.max_rssi !== undefined) rssiFilter.lte = filter.max_rssi;

        if (filter.channel !== undefined) channelFilter.equals = filter.channel;
        if (filter.min_channel !== undefined) channelFilter.gte = filter.min_channel;
        if (filter.max_channel !== undefined) channelFilter.lte = filter.max_channel;

        if (filter.createdAfter !== undefined) createdAtFilter.gte = new Date(filter.createdAfter);
        if (filter.createdBefore !== undefined) createdAtFilter.lte = new Date(filter.createdBefore);

        return {
            id: idFilter,
            ssid: ssidFilter,
            mac: macFilter,
            rssi: rssiFilter,
            channel: channelFilter,
            createdAt: createdAtFilter
        };
    }
}

export const deviceRepository = new DeviceRepository();