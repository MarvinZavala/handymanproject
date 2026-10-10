import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [{ source: "/areas", destination: "/areas-we-serve", permanent: true }];
  },
};

export default nextConfig;
