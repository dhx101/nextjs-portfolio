import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	output: "export", // <=== enables static exports
    basePath:"nextjs-portfolio/",
	distDir: "dist",
	reactStrictMode: true,
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
