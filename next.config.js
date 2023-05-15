/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  env: {
  	NEXT_DATABASE_URL: process.env.DATABASE_URL
  }
}

module.exports = nextConfig

