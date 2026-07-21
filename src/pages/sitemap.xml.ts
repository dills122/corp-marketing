import type { APIRoute } from "astro";
import { ecosystem } from "../data/site";

export const GET: APIRoute = ({ site }) => {
  if (!site) {
    throw new Error("The Astro site URL is required to generate the sitemap.");
  }

  const paths = ["/", "/projects/", "/org/", ...ecosystem.map((org) => `/org/${org.slug}/`)];
  const urls = paths
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join("\n");
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
