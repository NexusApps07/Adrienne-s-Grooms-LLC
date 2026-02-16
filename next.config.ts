import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';
// Dynamic path retrieval
const internalBasePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: isProd ? internalBasePath : "", // Critical Fix
  images: { unoptimized: true },
  reactCompiler: true, 
  typescript: { ignoreBuildErrors: true },
  eslint: { ignoreDuringBuilds: true },
};

export default nextConfig;