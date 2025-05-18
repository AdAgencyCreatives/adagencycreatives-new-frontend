/** @type {import('next').NextConfig} */
import pkg from '@next/env';
const { loadEnvConfig } = pkg;
loadEnvConfig(process.cwd());

const nextConfig = {
    // For proper static file handling
    images: {
        unoptimized: true // If you don't need Next.js image optimization
    },
};

export default nextConfig;

