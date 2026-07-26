import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Next 16 requires non-default quality values to be allowlisted.
    // 95 is used for the logo mark, which is a small, detail-critical image.
    qualities: [75, 90, 95],
  },
};

export default nextConfig;
