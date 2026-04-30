import { FolderKanban, Settings, TablePropertiesIcon } from 'lucide-react';

export const productMenu = [
  {
    title: 'Produto',
    url: '/product',
    icon: FolderKanban,
    children: [
      {
        title: 'Opções',
        url: '/product/page1',
        icon: Settings,
      },
      {
        title: 'Propriedades',
        url: '/product/page2',
        icon: TablePropertiesIcon,
      },
    ],
  },
];
