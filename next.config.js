const { hostname } = require("os");

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'oaidalleapiprodscus.blob.core.windows.net',
        pathname: '/**',
      },
      { protocol: 'https', hostname: 'cdn.pixabay.com', pathname: '/photo/**', },
    ],
  },
};
