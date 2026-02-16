import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// Ensure the path starts with a / and has no trailing slash
const rawPath = process.env.NEXT_PUBLIC_BASE_PATH || "";
const internalBasePath = rawPath.startsWith('/') ? rawPath : `/${rawPath}`;

const nextConfig: NextConfig = {
  output: 'export',
  // Only apply basePath in production and if it's not just "/"
  basePath: isProd && internalBasePath !== "/" ? internalBasePath : "",
  images: { unoptimized: true },
  reactCompiler: true,
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;