const nextConfig = {
 webpack: (config, options) => {
  config.module.rules.push({
   test: /\.md$/,
   use: "raw-loader",
  });
  return config;
 },
 env: {
  NEXT_DATOCMS_API_TOKEN: process.env.NEXT_DATOCMS_API_TOKEN,
  NEXT_SNIPCART_API: process.env.NEXT_SNIPCART_API,
 },
 images: {
  domains: ["www.datocms-assets.com"],
 },
 async headers() {
  return [
   {
    source: "/_next/static/(.*)",
    headers: [
     {
      key: "Cache-Control",
      value: "public, max-age=31536000",
     },
    ],
   },
   {
    source: "/static/(.*)",
    headers: [
     {
      key: "Cache-Control",
      value: "public, max-age=31536000",
     },
    ],
   },
   // {
   //  source: "/(.*)",
   //  headers: [
   //   {
   //    key: "X-Frame-Options",
   //    value: "DENY",
   //   },
   //   {
   //    key: "X-XSS-Protection",
   //    value: "1; mode=block",
   //   },
   //   {
   //    key: "X-Content-Type-Options",
   //    value: "nosniff",
   //   },
   //   {
   //    key: "Referrer-Policy",
   //    value: "same-origin",
   //   },
   //  ],
   // },
  ];
 },
};

module.exports = nextConfig;
