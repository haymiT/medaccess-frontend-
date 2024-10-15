import {
	IconDashboard,
	IconReceipt,
	IconShield,
	IconTrash,
	IconTrashFilled,
	IconTrashX,
	IconUser,
	IconUsersGroup,
	IconUserShield,
} from "@tabler/icons-react";
import type { NavItem } from "../types/nav-item";
import { Abel } from "next/font/google";

export const navLinks: NavItem[] = [
	{ label: "Dashboard", icon: IconDashboard, link: "/dashboard" },
	{ label: "Register Drug", icon: IconReceipt, link: "/register-drug" },
	{ label: "Show Drugs", icon: IconReceipt, link: "/show-drugs" },
	{ label: "Sell Drug", icon: IconReceipt, link: "/show-drugs" },
	{ label: "Show Sold Drug", icon: IconReceipt, link: "/show-drugs" },
	{ label: "Register Employee", icon: IconReceipt, link: "/show-drugs" },
	{ label: "Show Employee", icon: IconReceipt, link: "/show-drugs" },
	{ label: "Inventory", icon: IconReceipt, link: "/show-drugs" },
	{ label: "Show Inventory", icon: IconReceipt, link: "/show-drugs" },
	// Role Dashboard	
	{ label: "Role Dashboard", icon: IconShield, link: "/rbac/dashboard" },
	{ label: "Register User", icon: IconUsersGroup, link: "/rbac/role-management" },
	{ label: "Archived Users", icon: IconTrashX, link: "/rbac/archived-users" },
	// {
	// 	label: "Users & Roles",
	// 	icon: IconUsersGroup,
	// 	links: [
	// 		{
	// 			label: "Register User",
	// 			link: "/register-user",
	// 		},
	// 		{
	// 			label: "Show Users",
	// 			link: "/show-users",
	// 		},
	// 		{
	// 			label: "Register User Role",
	// 			link: "/register-role",
	// 		},
	// 		{
	// 			label: "Show Roles",
	// 			link: "/show-roles",
	// 		},
	// 		{
	// 			label: "Archived Users",
	// 			link: "/assign-role",
	// 		}
	// 	],
	// },
];
