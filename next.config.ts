import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/resume',
        destination: 'https://drive.google.com/file/d/1mLr9S5E6TneWa-7nYpkgAGu4U_Lhokk3',
        permanent: true
      }
    ];
  }
};

export default nextConfig;
