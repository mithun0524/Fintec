/** @type {import('next').NextConfig} */
const nextConfig = {
  // Add this to exclude the problematic modules from being processed
  webpack: (config, { isServer }) => {
    // Exclude problematic packages
    config.resolve.alias = {
      ...config.resolve.alias,
      '@connectrpc/connect-web': false,
      '@connectrpc/connect': false,
      '@bufbuild/protobuf': false
    };
    
    return config;
  },
  
  // Add images configuration to allow randomuser.me domain
  images: {
    domains: ['randomuser.me'],
  },
};

module.exports = nextConfig;