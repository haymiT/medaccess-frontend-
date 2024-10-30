"use client";

import {
  AppShell,
  useMantineColorScheme,
  useMantineTheme,
} from "@mantine/core";
import { HeaderMegaMenu } from "../_components/header/header-search";


interface Props {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: Props) {
  const { colorScheme } = useMantineColorScheme();
  const theme = useMantineTheme();

  const bg =
    colorScheme === "dark" ? theme.colors.dark[7] : theme.colors.gray[0];

  return (
    <AppShell
      header={{ height: 100 }}
      padding="md"
      transitionDuration={500}
      transitionTimingFunction="ease"
    >
      <AppShell.Header>
        <HeaderMegaMenu />
      </AppShell.Header>
      <AppShell.Main bg={bg}>{children}</AppShell.Main>
    </AppShell>
  );
}
