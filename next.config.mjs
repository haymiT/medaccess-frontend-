import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
  reactStrictMode: false,
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizePackageImports: [
      "@mantine/core",
      "@mantine/core",
      "@mantine/hooks",
      "@next/bundle-analyzer",
      "@nextui-org/button",
      "@nextui-org/react",
      "@nextui-org/table",
      "@nextui-org/theme",
      "@reduxjs/toolkit",
      "@tabler/icons-react",
      "axios",
      "mantine-datatable",
      "react",
      "react-dom",
      "react-hook-form",
      "react-redux",
      "sass",
      "zod",
      "@hookform/resolvers",
      "@mantine/modals",
      "@mantine/styles",
      "tailwindcss",
      "clsx",
    ],
  },
  output: 'standalone',
});