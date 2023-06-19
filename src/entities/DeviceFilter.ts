import { z } from "zod";
import { MAC_LENGTH, NUMBER_OF_CHANNELS } from "./Device";

const QueryDeviceFilter = z.object({
    id: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),

    ssid: z.string().optional().nullable(),
    mac: z.string().refine(val => val.length == MAC_LENGTH).optional().nullable(),

    min_rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val <= 0).optional().nullable(),
    max_rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val <= 0).optional().nullable(),

    channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val >= 1 && val <= NUMBER_OF_CHANNELS).optional().nullable(),

    createdAfter: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable(),
    createdBefore: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional().nullable()
});

type DeviceFilter = typeof QueryDeviceFilter._type;

export { QueryDeviceFilter, DeviceFilter };