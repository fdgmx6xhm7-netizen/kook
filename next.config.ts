import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  images: {
    domains: ["example.com"], // 이미지 도메인 추가
  },
};

export default nextConfig;
