/** @type {import('next').NextConfig} */

import runtimeCaching from 'next-pwa/cache.js'
import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
  register: true,
  skipWaiting: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
})

const ContentSecurityPolicy = `
    default-src 'self' vercel.live;
    script-src 'self' 'unsafe-eval' 'unsafe-inline' cdn.vercel-insights.com vercel.live va.vercel-scripts.com youtube.com http://www.youtube.com https://www.youtube.com;
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    media-src *;
    connect-src *;
    font-src 'self' data:;
    worker-src * blob: data;
    frame-src www.youtube.com https://www.youtube.com;
`

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: ContentSecurityPolicy.replace(/\n/g, ''),
  },
  {
    key: 'Referrer-Policy',
    value: 'no-referrer',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=()',
  },
]

export default withPWA({
  headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
  eslint: {
    dirs: ['app'],
    ignoreDuringBuilds: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'jyemvxshpznmgnzoxuhp.supabase.co',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'media.graphassets.com',
        pathname: '**',
      },
    ],
  },
})

// import bundleAnalyzer from '@next/bundle-analyzer'

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
//   openAnalyzer: true,
// })

// export default withBundleAnalyzer({
//   poweredByHeader: false,
//   eslint: {
//     ignoreDuringBuilds: true,
//   },
//   typescript: {
//     // next doesn't need to check because typecheck command will
//     // also Next.js report false positives (try it...)
//     ignoreBuildErrors: true,
//   },
//   redirects: async () => [
//     // Redirect organization routes
//     {
//       source: '/:organizationId/view/subscription/manage',
//       destination: '/:organizationId/view/subscription',
//       permanent: true,
//     },
//   ],
// })
