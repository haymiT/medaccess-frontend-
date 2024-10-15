import { IconArchive, IconAward, IconBrandSpeedtest, IconPower, IconShoppingCart, IconUsers, IconUsersGroup } from '@tabler/icons-react';
import { MenuLinks } from '../models';

export const myMenus: MenuLinks.SidebarLinks[] = [
  {
    label: 'Dashboard',
    icon: IconBrandSpeedtest,
    link: '/',
  },
  {
    label: 'Role Management',
    icon: IconUsersGroup,
    link: '/role-management',
  },
  {
    label: 'Archived Users',
    icon: IconArchive,
    link: '/archived-users',
  }
];
