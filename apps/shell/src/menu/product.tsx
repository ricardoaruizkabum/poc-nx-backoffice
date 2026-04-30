import { FolderKanban } from 'lucide-react';

export const productMenu = [
  {
    title: 'Produto',
    url: '/product',
    icon: FolderKanban,
    children: [
      {
        title: 'Page 1',
        url: '/product/page1',
        icon: FolderKanban,
      },
      {
        title: 'Page 2',
        url: '/product/page2',
        icon: FolderKanban,
      },
    ],
  },
];
