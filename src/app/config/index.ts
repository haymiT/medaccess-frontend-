import {
	IconBuildingStore,
	IconBuildingWarehouse,
	IconDashboard,
	IconPillFilled,
	IconShield,
	IconShoppingBagCheck,
	IconTrashX,
	IconUserPlus,
	IconUsersGroup,
} from "@tabler/icons-react";
import type { NavItem } from "../types/nav-item";

export const navLinks: NavItem[] = [
	{ label: "Dashboard", icon: IconDashboard, link: "/dashboard" },
	// Drug Dashboard
	{ label: "Drugs", icon: IconPillFilled, link: "/drugs" },
	{ label: "Sell Drug", icon: IconBuildingStore, link: "/sell-drug" },
	{ label: "Show Sold Drug", icon: IconShoppingBagCheck, link: "/show-sold-drug" },
	{ label: "Inventory", icon: IconBuildingWarehouse, link: "/inventory" },
	{ label: "Register Employee", icon: IconUserPlus, link: "/register-employee" },
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
