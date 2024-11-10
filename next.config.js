/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  cacheHandler: require.resolve("./cache-handler.mjs"),
}
module.exports = nextConfig
