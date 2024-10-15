"use client";

import {
	Box,
} from "@mantine/core";
import classes from "./admin-header.module.css";
import { Logo } from "../logo/Logo";

interface Props {
	burger?: React.ReactNode;
}

export function AdminHeader({ burger }: Props) {
	return (
		<header className={classes.header}>
			{burger && burger}
			<Logo />
			<Box style={{ flex: 1 }} />
		</header>
	);
}
