import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://zorgbewaking.nl/sitemap.xml",
    host: "https://zorgbewaking.nl",
  };
}
