import { FolderKanban, MapPinHouse, User } from 'lucide-react';
import { MenuItem } from './types';

export const managerCxMenu: MenuItem[] = [
  {
    moduleName: 'Manager CX',
    title: 'Manager CX',
    url: '/manager_cx',
    icon: FolderKanban,
    children: [
      {
        title: 'Pessoa',
        url: '/manager_cx/page1',
        icon: User,
      },
      {
        title: 'Endereço',
        url: '/manager_cx/page2',
        icon: MapPinHouse,
      },
    ],
  },
];
