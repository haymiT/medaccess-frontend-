"use client";
import { useMediaQuery } from "@mantine/hooks";
import Sidebar from "@/app/_components/sidebar/sidebar";
import { Box, Flex, Text } from "@mantine/core";
import styles from "../../../_components/sidebar/sidebar.module.scss";

export default function Layout({ children }: { children: React.ReactNode }) {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <Flex>
      <nav
        className={styles.nav}
        style={{
          display: isMobile ? "none" : "block",
        }}
      >
        <Sidebar />
      </nav>
      <Box className="w-full flex p-6  bg-[#e7f4f7]">
        <Box className=" w-full p-6 bg-white">
          {children}
        </Box>
      </Box>
    </Flex>
  );
}
