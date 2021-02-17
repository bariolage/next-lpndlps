const withPWA = require("next-pwa");

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
  },
};

module.exports = withPWA(nextConfig);
