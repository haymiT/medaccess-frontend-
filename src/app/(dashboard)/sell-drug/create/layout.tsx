"use client";
import { Box } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box className="w-full flex p-6 bg-[#f5f7fa]">
      <Box className=" w-full p-6 bg-white shadow-md">
        {children}
      </Box>
    </Box>
  );
}
