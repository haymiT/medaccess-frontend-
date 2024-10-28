"use client";

import {
  Box,
  Group,
  ThemeIcon,
} from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./nav-links.module.css";

interface LinksGroupProps {
  icon: React.FC<any>;
  label: string;
  link?: string;
}

export function NavLinksGroup({
  icon: Icon,
  label,
  link,
}: LinksGroupProps) {
  
  const pathname = usePathname();
  return (
    <>
      {link ? (
        <Link
          href={link}
          className={`${classes.control} ${link === pathname && classes.activeControl}`}
        >
          <Group gap={0} justify="space-between">
            <Box style={{ display: "flex", alignItems: "center" }}>
              <ThemeIcon variant="light" size={30}>
                <Icon size="1.1rem" />
              </ThemeIcon>
              <Box ml="md">{label}</Box>
            </Box>
          </Group>
        </Link>
      ) : (
        <></>
      )}
    </>
  );
}
