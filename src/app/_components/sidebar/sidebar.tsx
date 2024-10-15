import { Box, NavLink, Text, UnstyledButton } from "@mantine/core";
import { usePathname, useRouter } from "next/navigation";
import styles from "./sidebar.module.scss";
import { menus } from "./_constants";
import { MenuLinks } from "./models";
import { IconPower } from "@tabler/icons-react";
import { Button } from "@mantine/core";
import notification from "../notification";
import { Backend_URL } from "@/app/lib/constant";

function createNavLinks(
  links: MenuLinks.SidebarLinks[] | undefined,
  currentPath: string,
  router: any
) {
  return links?.map((link) => (
    <UnstyledButton
      key={link.label}
      className={`${styles.mainLink} ${
        currentPath === link.link && styles.activeLink
      }`}
      onClick={() => link.link && router.push(link.link)}
    >
      <NavLink
        label={link.label}
        leftSection={link.icon && <link.icon size="1.2rem" stroke={1.5} />}
        key={link.label}
        className={!link.icon ? styles.sidebarChildren : ""}
      >
        {createNavLinks(link.links, currentPath, router)}
      </NavLink>
    </UnstyledButton>
  ));
}
function Sidebar() {
  const router = useRouter();
  const path = usePathname();

  const handleSignOut = async () => {
    try {
      // Call your backend's sign-out endpoint (optional)
      const result = await fetch(`${Backend_URL}/authentication/log-out`, {
        method: "POST",
        credentials: "include",
      });

      // // Remove the token (if stored in localStorage or cookies)
      // document.cookie = "Authentication=; Max-Age=0; path=/;";
      if (!result.ok) {
        const errorData = await result.json();
        const errorMessage = Array.isArray(errorData.message)
          ? errorData.message.join(", ")
          : errorData.message || "Something went wrong";

        notification.error("Error", errorMessage);
      } else {
        notification.success("Success", "You have successfully signed out");
        router.push("/");
      }
      // Redirect to the sign-in page
      router.push("/auth/signin");
    } catch (error) {
      notification.error("Error", String(error));
    }
  };
  return (
    <Box className={styles.sidebarMain}>
      <Box className={styles.mainLinks}>
        <Text className={styles.groupTitle}>RBAC</Text>
        {createNavLinks(menus.myMenus, path, router)}
      </Box>
      {/* <button className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-[#228be6] p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3 mt-[480px]"> */}
      {/* <Button>
          <IconPower className="w-6" />
        </Button> */}
      <Button
        leftSection={<IconPower size={14} />}
        variant="gradient"
        size="xs"
        w={160}
        // mt={510}
        ml={10}
        onClick={handleSignOut}
        mt="auto"
      >
        Sign Out
      </Button>
      {/* <div className="hidden md:block"></div> */}
      {/* </button> */}
    </Box>
  );
}

export default Sidebar;
