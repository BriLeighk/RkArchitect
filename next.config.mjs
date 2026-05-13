import dotenv from "dotenv";

dotenv.config();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optional: set NEXT_PUBLIC_CDN_ORIGIN to your static CDN origin (no trailing slash) so _next/static is served from CDN.
  ...(process.env.NODE_ENV === "production" && process.env.NEXT_PUBLIC_CDN_ORIGIN
    ? { assetPrefix: process.env.NEXT_PUBLIC_CDN_ORIGIN.replace(/\/$/, "") }
    : {}),
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      { protocol: "https", hostname: "firebasestorage.googleapis.com", pathname: "/**" },
      { protocol: "https", hostname: "lh3.googleusercontent.com", pathname: "/**" },
    ],
  },
  experimental: {
    optimizePackageImports: ["react-icons", "@heroicons/react/24/outline", "@headlessui/react"],
  },
};

export default nextConfig;
