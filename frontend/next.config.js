/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: false,
    webpackDevMiddleware: (config) => {
        config.watchOptions.poll = 300
        return config
    },
    images: {
        domains: [
        'tailwindui.com', 
        'images.unsplash.com', 
        'unsplash.com'],
    },
}

module.exports = nextConfig
