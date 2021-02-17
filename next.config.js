const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
// your next.js configs
const nextConfig = {
  future: { webpack5: true },
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  images: {
    imageSizes: [],
    deviceSizes: [
      16,
      32,
      48,
      64,
      96,
      128,
      256,
      384,
      512,
      640,
      750,
      828,
      1080,
      1200,
      1920,
      2048,
      3840,
    ],
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
};

module.exports = withPWA(nextConfig);
