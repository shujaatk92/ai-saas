/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "googleusercontent.com", // if your website has no www, drop it
        },
        {
          protocol: "https",
          hostname: "oaidalleapiprodscus.blob.core.windows.net",
        },
        {
          protocol: "https",
          hostname: "cdn.openai.com",
        },
      ],
    },}

module.exports = nextConfig
