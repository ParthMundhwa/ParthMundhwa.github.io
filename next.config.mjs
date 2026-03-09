/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
    },
    // Ensure there is NO basePath: "/portfolio" line. 
    // For a repo named 'ParthMundhwa.github.io', basePath must be empty or removed.
};

export default nextConfig;