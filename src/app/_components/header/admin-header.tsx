"use client";

import {
	ActionIcon,
	Box,
	Drawer,
	Stack,
	TextInput,
	useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
	IconBell,
	IconLogout,
	IconMoon,
	IconSearch,
	IconSun,
} from "@tabler/icons-react";
import classes from "./admin-header.module.css";
import { Logo } from "../logo/Logo";

interface Props {
	burger?: React.ReactNode;
}

export function AdminHeader({ burger }: Props) {
	const [opened, { close, open }] = useDisclosure(false);
	const { colorScheme, setColorScheme } = useMantineColorScheme();

	return (
		<header className={classes.header}>
			{burger && burger}
			<Logo />
			<Box style={{ flex: 1 }} />
			<TextInput
				placeholder="Search"
				variant="filled"
				leftSection={<IconSearch size="0.8rem" />}
				style={{}}
			/>

			<ActionIcon
				onClick={() => {
					setColorScheme(colorScheme === "light" ? "dark" : "light");
				}}
				variant="subtle"
			>
				{colorScheme === "light" ? (
					<IconMoon size="1.25rem" />
				) : (
					<IconSun size="1.25rem" />
				)}
			</ActionIcon>

			<ActionIcon onClick={open} variant="subtle">
				<IconBell size="1.25rem" />
			</ActionIcon>

			<ActionIcon variant="subtle">
				<IconLogout aria-label="log-out" size="1.25rem" />
			</ActionIcon>

			<Drawer
				opened={opened}
				onClose={close}
				title="Settings"
				position="right"
				transitionProps={{ duration: 0 }}
			>
				<Stack gap="lg">
					{/* <ThemeSwitcher /> */}
					Hello
				</Stack>
			</Drawer>
		</header>
	);
}
