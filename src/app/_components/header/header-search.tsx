import { Group, Button, Divider, Box, Burger, Drawer, ScrollArea, rem } from '@mantine/core';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; 
import { Logo } from '../logo/logo';
import { useDisclosure } from '@mantine/hooks';
import classes from './header-search.module.css';

const Links = ({ active, setActive }: any) => {
    const router = useRouter();
    const links = [
        { href: '/dashboard', label: 'Dashboard' },
        { href: '/medications', label: 'Medications' },
        { href: '/sell-drug', label: 'Sell Drug' },
        { href: '/show-sold-drug', label: 'Show Sold Drug' },
        { href: '/inventory', label: 'Inventory' },
        { href: '/user/user-management', label: 'User Management' },
    ];

    const handleLinkClick = (event: any, link: string) => {
        event.preventDefault(); // Prevent default anchor link behavior
        setActive(link);  // Set the active state
        router.push(link);
    };

    return (
        <>
            {links.map((link) => (
                <a
                    key={link.label}
                    href={link.href}
                    className={`${classes.link} ${active === link.href ? classes.active : ''}`}
                    onClick={(event) => handleLinkClick(event, link.href)}
                >
                    {link.label}
                </a>
            ))}
        </>
    );
};

export function HeaderMegaMenu() {
    const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);
    const [active, setActive] = useState('/dashboard'); // Set a default active link

    return (
        <Box>
            <header className={classes.header}>
                <Group justify="space-between" gap={'20px'} h="100%" p={'lg'} my={'sm'} align="center">
                    <Logo />

                    <Group h="100%" gap={0} visibleFrom="sm">
                        <Links active={active} setActive={setActive} />
                    </Group>

                    <Group visibleFrom="sm">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>

                    <Burger opened={drawerOpened} onClick={toggleDrawer} hiddenFrom="sm" />
                </Group>
            </header>

            <Drawer
                opened={drawerOpened}
                onClose={closeDrawer}
                size="100%"
                padding="md"
                title="Navigation"
                hiddenFrom="sm"
                zIndex={1000000}
            >
                <ScrollArea h={`calc(100vh - ${rem(80)})`} mx="-md">
                    <Divider my="sm" />
                    <Links active={active} setActive={setActive} />
                    <Divider my="sm" />

                    <Group justify="center" grow pb="xl" px="md">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}
