import { z } from "zod";

const QueryDevice = z.object({
    ssid: z.string(),
    mac: z.string(),
    rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val)),
    channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val))
});

type Device = typeof QueryDevice._type;

export { QueryDevice, Device };