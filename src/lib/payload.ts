import config from "@payload-config";
import { getPayload } from "payload";

/** Payload Local API client — truy vấn DB trực tiếp trong Server Components. */
export const getPayloadClient = () => getPayload({ config });
