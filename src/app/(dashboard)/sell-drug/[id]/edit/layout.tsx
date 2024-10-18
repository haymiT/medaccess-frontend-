"use client";
import { Box } from "@mantine/core";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
      <Box className="w-full flex p-6  ">
        <Box className=" w-full p-6 bg-white">
          {children}
        </Box>
      </Box>
  );
}
