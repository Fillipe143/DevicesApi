import { z } from "zod";
import { MAC_LENGTH, NUMBER_OF_CHANNELS } from "./Device";

const QueryDeviceFilter = z.object({
    id: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional(),

    ssid: z.string().optional(),
    mac: z.string().refine(val => val.length == MAC_LENGTH).optional(),

    rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val <= 0).optional(),
    min_rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val <= 0).optional(),
    max_rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val <= 0).optional(),

    channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val >= 1 && val <= NUMBER_OF_CHANNELS).optional(),
    min_channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val >= 1 && val <= NUMBER_OF_CHANNELS).optional(),
    max_channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val >= 1 && val <= NUMBER_OF_CHANNELS).optional(),
    
    createdAfter: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional(),
    createdBefore: z.string().transform(val => Number(val)).refine(val => !isNaN(val)).optional()
});

type DeviceFilter = typeof QueryDeviceFilter._type;

export { QueryDeviceFilter, DeviceFilter };