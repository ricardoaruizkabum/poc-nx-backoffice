import { FolderKanban, Settings, TablePropertiesIcon } from 'lucide-react';
import { MenuItem } from './types';

export const productMenu: MenuItem[] = [
  {
    moduleName: 'Product',
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
