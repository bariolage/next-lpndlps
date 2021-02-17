const withOffline = require("next-offline");

// your next.js configs
const nextConfig = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
};

module.exports = withOffline(nextConfig);
