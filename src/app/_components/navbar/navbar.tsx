"use client";

import { ScrollArea } from "@mantine/core";

// import UserButton
import type { NavItem } from "../../types/nav-item";
import { NavLinksGroup } from "./nav-links-group";
import classes from "./Navbar.module.css";
import React from "react";
import { UserButton } from "../user-button/user-button";
import Link from "next/link";

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

      <div className={classes.footer}>
        <Link href={'/profile'}>
        <UserButton
          image="https://lh3.googleusercontent.com/a-/ALV-UjV2g2DbBhx5EK0ov3CVSF_N4zOoe5XwPn9Luk_oqtam_pNQl7ce=s48-p"
          name="Haymanot"
          email="haymanot216@gmail.com"
        />
        </Link>
      </div>
    </>
  );
}
