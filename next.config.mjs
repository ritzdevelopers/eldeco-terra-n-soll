/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Direct Figma asset URLs (the `https://.../api/mcp/asset/...` form returned
    // by get_design_context) can be dropped straight into ui/assets.js and will
    // render without further config. They expire in roughly 7 days, so anything
    // being committed should be downloaded into /public/eldeco-terraNSole/.
    remotePatterns: [
      { protocol: "https", hostname: "www.figma.com" },
      { protocol: "https", hostname: "figma.com" },
      { protocol: "https", hostname: "s3-alpha.figma.com" },
      { protocol: "https", hostname: "s3-alpha-sig.figma.com" },
      { protocol: "https", hostname: "figma-alpha-api.s3.us-west-2.amazonaws.com" },
    ],
  },
};

export default nextConfig;
