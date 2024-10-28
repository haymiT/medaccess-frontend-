import {
	IconBuildingStore,
	IconBuildingWarehouse,
	IconDashboard,
	IconPillFilled,
	IconShield,
	IconShoppingBagCheck,
	IconTrashX,
	IconUser,
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
	{ label: "Profile", icon: IconUser, link: "/profile" },
];
