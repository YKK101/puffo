import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ['https://oaidalleapiprodscus.blob.core.windows.net'], // FIXME: WRAP IMAGE URL
  },
};

export default nextConfig;
