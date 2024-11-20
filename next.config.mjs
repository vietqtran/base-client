import createNextIntlPlugin from 'next-intl/plugin'

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
   reactStrictMode: false,
   images: {
      remotePatterns: [
         {
            protocol: 'https',
            hostname: '*'
         },
         {
            protocol: 'http',
            hostname: '*'
         }
      ]
   }
}

export default withNextIntl(nextConfig)
