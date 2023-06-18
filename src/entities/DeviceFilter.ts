import { z } from "zod";

const QueryDeviceFilter = z.object({
    id: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),

    ssid: z.string().optional().nullable(),
    mac: z.string().optional().nullable(),

    min_rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),
    max_rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),

    channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),

    min_timestamp: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),
    max_timestamp: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable()
});

type DeviceFilter = typeof QueryDeviceFilter._type;

export { QueryDeviceFilter, DeviceFilter };