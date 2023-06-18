import { z } from "zod";

const MAC_LENGTH = 17;
const NUMBER_OF_CHANNELS = 13;

const QueryDevice = z.object({
    ssid: z.string(),
    mac: z.string().refine(val => val.length == MAC_LENGTH),
    rssi: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val <= 0),
    channel: z.string().transform(val => Number(val)).refine(val => !isNaN(val) && val >= 1 && val <= NUMBER_OF_CHANNELS)
});

type Device = typeof QueryDevice._type;

export { QueryDevice, Device };