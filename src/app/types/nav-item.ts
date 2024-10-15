import { IconProps } from "@tabler/icons-react";
import { ReactNode } from "react";

export interface NavItem {
	label: string;
	icon: (props: IconProps) => ReactNode;
	link?: string;
	initiallyOpened?: boolean;
	links?: { label: string; link: string }[];
}
