/** @type {import('next').NextConfig} */

const nextConfig = {
    // For proper static file handling
    images: {
        unoptimized: true // If you don't need Next.js image optimization
    },
};

export default nextConfig;

