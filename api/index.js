import { startDirectus } from "@directus/api";

export default async function handler(req, res) {
    const directus = await startDirectus();
    directus(req, res);
}
