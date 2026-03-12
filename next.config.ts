import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1zlZEOW4ShsCAmGZYOv5Qa184eOqXpQzS/view',
        permanent: true
      },
      {
        source: '/scaling-playbook',
        destination: 'https://drive.google.com/file/d/1d3IQyGGMOCIxlxU91aJOkVh9ODUpU9RQ/view',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
