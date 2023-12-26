/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

/*
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

module.exports = nextConfig; /*

/*export const reactStrictMode = true;
export const experimental = {
  appDir: true,
};

/*module.exports = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};
*/
