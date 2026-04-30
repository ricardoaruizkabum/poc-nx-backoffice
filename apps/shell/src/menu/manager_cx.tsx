import { FolderKanban, MapPinHouse, User } from 'lucide-react';

export const managerCxMenu = [
  {
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
