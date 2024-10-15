"use client";

import {
  Box,
  Flex,
  Space,
  Text,
} from "@mantine/core";
import { lusitana } from "@/app/ui/fonts";

export default function UserListTable() {

  return (
    <Box className="w-full flex p-6 bg-[#f5f7fa]">
      <Box className="w-full p-6 bg-white rounded-lg shadow-md">
        <Flex
          direction={"row"}
          className="justify-between py-2 mb-4 border-b-2 border-gray-200"
        >
          <h1 className={`${lusitana.className} text-2xl text-gray-800`}>
            Dashboard
          </h1>
        </Flex>
        <Space h="xl" />
        <Space h="xl" />
        <Text size="xl">Under Construction 👷🏗️</Text>
        <Space h="xl" />
        <Space h="xl" />

      </Box>
    </Box>
  );
}
