import type { NextConfig } from "next";




const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ['@uiw/react-markdown-editor'],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/**",
      },
      {
        protocol: "https",
        hostname: "unsplash.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "waogsjzgfpckyxxbugfn.supabase.co",
        port: "",
        pathname: "/storage/v1/object/avatar/**",
      },
    ],
  },
};

export default nextConfig;
