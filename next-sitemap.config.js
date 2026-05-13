require("dotenv").config({ path: ".env.local" });
require("dotenv").config();

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://robertkarchitect.com",
  generateRobotsTxt: true,
};
