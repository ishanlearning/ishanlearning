/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: "export",
//   reactStrictMode: true,

//   basePath: "/ishan-learning-page",
//   assetPrefix: "/ishan-learning-page/",

//   typescript: {
//     ignoreBuildErrors: true,
//   },

//   images: {
//     unoptimized: true,
//   },
// };

// export default nextConfig;
