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
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
    runtimeCaching,
  },
};

module.exports = withPWA(nextConfig);
