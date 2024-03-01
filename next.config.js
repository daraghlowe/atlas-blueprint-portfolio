const { withFaust, getWpHostname } = require('@faustwp/core');
const { withAtlasConfig } = require("@wpengine/atlas-next")

/**
 * @type {import('next').NextConfig}
 **/
module.exports = withAtlasConfig(withFaust({
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['node_modules'],
  },
  images: {
    domains: [getWpHostname()],
  },
  i18n: {
    locales: ['en'],
    defaultLocale: 'en',
  },
}));
