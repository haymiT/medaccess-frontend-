"use client";

import React, { useEffect, useState } from "react";
import { Avatar, Box, Flex, Text, Title } from "@mantine/core";
import Image from "next/image";
import CardWrapper from "../../../ui/dashboard/cards";
import { IconUser } from "@tabler/icons-react";
import { Backend_URL } from "../../../lib/constant";

export default function DashboardPage() {
  const [message, setMessage] = useState("");
  const [auth, setAuth] = useState(false);
  useEffect(() => {
    (async () => {
      try {
        const respone = await fetch(`${Backend_URL}/authentication/`, {
          credentials: "include",
        });
        const content = await respone.json();
        setMessage(`IAM, ${content.name} 👋`);
        setAuth(true);
        console.log("User", content);
      } catch (err) {
        setMessage(`You are not logged in`);
        setAuth(false);
      }
    })();
  });
  return (
      <Box className="w-full flex p-6  ">
        <Box className=" w-full p-6 bg-white">
          <Flex direction={"column"} className="py-2 mb-4 border-b-2">
            <Text fw={700} fz="xl" c={"#121A3E"}>
              RBAC Dashboard
            </Text>
          </Flex>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <CardWrapper />
          </div>
          <Title></Title>
          <Flex align={'center'} gap={5} mt={5}>
            <Avatar color="blue" radius="xl">
              <IconUser size="1.5rem" />
            </Avatar>
            {message}
          </Flex>
          <Image
            src="/dashboard.svg"
            alt="Dashboard"
            width={450}
            height={450}
            className="mx-auto"
          />
        </Box>
      </Box>
  );
}
