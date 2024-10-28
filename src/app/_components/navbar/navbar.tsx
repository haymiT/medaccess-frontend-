"use client";

import { ScrollArea } from "@mantine/core";
import type { NavItem } from "../../types/nav-item";
import { NavLinksGroup } from "./nav-links";
import classes from "./navbar.module.css";
import React from "react";

interface Props {
  data: NavItem[];
  hidden?: boolean;
}

export function Navbar({ data }: Props) {
  const links = data.map((item) => (
    <NavLinksGroup key={item.label} {...item} />
  ));

  return (
    <>
      <ScrollArea className={classes.links}>
        <div className={classes.linksInner}>{links}</div>
      </ScrollArea>
    </>
  );
}
