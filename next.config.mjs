/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "ipfs.chlewigen.ch",
        protocol: "https",
      },
    ],
  },
  poweredByHeader: false,
};

export default nextConfig;
