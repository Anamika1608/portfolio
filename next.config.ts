import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/resume",
        destination:
          "https://drive.google.com/file/d/1R8w70v_TzCwopAgj8olVwOs6IUgqAA-w/view?usp=sharing",
        permanent: true,
      },
      {
        source: "/scaling-playbook",
        destination:
          "https://drive.google.com/file/d/1d3IQyGGMOCIxlxU91aJOkVh9ODUpU9RQ/view",
        permanent: true,
      },
      {
        source: "/github",
        destination: "https://github.com/Anamika1608",
        permanent: true,
      },
      {
        source: "/linkedin",
        destination: "https://www.linkedin.com/in/anamikaaggarwal12",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://x.com/anamika_agg",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
