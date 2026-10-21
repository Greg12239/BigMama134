/** @type {import('next').NextConfig} */
// GitHub Pages project sites live under /<repository>; production root stays unchanged.
const pagesBasePath = process.env.GITHUB_PAGES_BASE_PATH || "";

const nextConfig = {
  output: "export",
  ...(pagesBasePath ? { basePath: pagesBasePath, trailingSlash: true } : {}),
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
