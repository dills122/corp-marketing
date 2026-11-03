import type { APIRoute } from "astro";
import { openSourceProjects } from "../data/open-source";

const escapeXml = (value: string) => value.replace(/[<>&"']/g, (character) => ({
  "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;"
}[character]!));

export const GET: APIRoute = ({ site }) => {
  if (!site) throw new Error("The canonical site URL must be configured.");

  const contributions = openSourceProjects.flatMap((project) =>
    project.contributions.map((contribution) => ({ ...contribution, project: project.name }))
  ).sort((a, b) => b.mergedAt.localeCompare(a.mergedAt) || a.url.localeCompare(b.url));

  const items = contributions.map((contribution) => `
    <item>
      <title>${escapeXml(`${contribution.project}: ${contribution.title}`)}</title>
      <link>${escapeXml(contribution.url)}</link>
      <guid isPermaLink="true">${escapeXml(contribution.url)}</guid>
      <description>${escapeXml(`Merged contribution by Dylan Steele to ${contribution.repository}: ${contribution.title}`)}</description>
      <pubDate>${new Date(`${contribution.mergedAt}T00:00:00Z`).toUTCString()}</pubDate>
      <category>${escapeXml(contribution.project)}</category>
    </item>`).join("");

  return new Response(`<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Shwimp Studios — open-source contributions</title>
    <link>${escapeXml(new URL("/open-source/", site).href)}</link>
    <description>Curated, verified open-source contributions by Dylan Steele of Shwimp Studios.</description>
    <language>en</language>
    <atom:link href="${escapeXml(new URL("/feed.xml", site).href)}" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
};
