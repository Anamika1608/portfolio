import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1mLr9S5E6TneWa-7nYpkgAGu4U_Lhokk3',
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
