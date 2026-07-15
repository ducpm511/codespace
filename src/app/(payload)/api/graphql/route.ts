/* Payload GraphQL API — KHÔNG chỉnh sửa thủ công. */
import config from "@payload-config";
import { GRAPHQL_POST } from "@payloadcms/next/routes";

export const POST = GRAPHQL_POST(config);
