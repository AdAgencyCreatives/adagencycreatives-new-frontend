/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'standalone', // Recommended for production
    // If you're hosting in a subdirectory:
    // basePath: '/your-subdirectory',
    // assetPrefix: '/your-subdirectory',
    // Enable if you need to serve from CDN:
    // assetPrefix: process.env.ASSET_PREFIX || '',

    // For proper static file handling
    images: {
        unoptimized: true // If you don't need Next.js image optimization
    }
};

export default nextConfig;
