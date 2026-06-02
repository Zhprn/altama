import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./i18n.ts");

const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  ? new URL(process.env.NEXT_PUBLIC_API_BASE_URL)
  : null;

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "api.altamasuryaanugerah.com",
        pathname: "/uploads/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "3003",
        pathname: "/uploads/**",
      },
      {
        protocol: "https",
        hostname: "scontent.cdninstagram.com",
        port: "",
        pathname: "/**",
      },
      ...(apiUrl
        ? [
            {
              protocol: apiUrl.protocol.replace(":", "") as "http" | "https",
              hostname: apiUrl.hostname,
              port: apiUrl.port || undefined,
              pathname: "/uploads/**",
            },
          ]
        : []),
    ],
  },
};

export default withNextIntl(nextConfig);
