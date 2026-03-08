import type { NextConfig } from "next";

const allowedImageHostnames =
  (process.env.NEXT_PUBLIC_IMAGE_HOSTNAMES ?? "")
    .split(",")
    .map((hostname) => hostname.trim())
    .filter(
      (hostname) =>
        hostname.length > 0 &&
        hostname !== "**" &&
        !hostname.includes("*"),
    );

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: allowedImageHostnames.map((hostname) => ({
      protocol: "https",
      hostname,
    })),
  },
};

export default nextConfig;
