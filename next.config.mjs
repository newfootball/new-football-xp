/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.html$/,
      loader: "html-loader",
    });

    return config;
  },
  images: {
    domains: [
      "lh3.googleusercontent.com",
      "www.thefinance360.com",
      "loremflickr.com",
    ],
  },
};

import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
  cacheOnFrontEndNav: true,
  aggressiveFrontEndNavCaching: true,
  reloadOnOnline: true,
  swcMinify: true,
  disable: false,
  workboxOptions: {
    disableDevLogs: true,
  },
});

export default withPWA(nextConfig);
