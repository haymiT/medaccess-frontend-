"use client";

import {
  AppShell,
  Burger,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Navbar } from "../_components/navbar/navbar";
import { navLinks } from "../config";
import { AdminHeader } from "../_components/header/admin-header";


interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const [opened, { toggle }] = useDisclosure();
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];

  return (
    <AppShell
      header={{ height: 65 }}
      navbar={{ width: 280, breakpoint: "sm", collapsed: { mobile: !opened } }}
      padding="xs"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Navbar>
        <Navbar data={navLinks} hidden={!opened} />
      </AppShell.Navbar>
      <AppShell.Header>
        <AdminHeader
          burger={
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
              mr="xl"
            />
          }
        />
      </AppShell.Header>
      <AppShell.Main bg={bg}>{children}</AppShell.Main>
      {/* <AppShell.Footer>
        <Text w="full" size="sm" c="gray">
          CopyRight © {new Date().getFullYear()} FineInvoice. All rights reserved.
        </Text>
      </AppShell.Footer> */}
    </AppShell>
  );
}