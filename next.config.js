/** @type {import('next').NextConfig} */
const { withPlugins } = require('next-compose-plugins');
const withTM = require('next-transpile-modules')(['sezy-design']);

module.exports = withPlugins([withTM], {
  basePath: process.env.BASE_PATH,
  reactStrictMode: true,
  env: {
    API_URL: process.env.API_URL,
    ACCESS_TOKEN_COOKIE: process.env.ACCESS_TOKEN_COOKIE,
  },
  async rewrites() {
    return [
      {
        source: '/:any*',
        destination: '/',
      },
    ];
  },
});