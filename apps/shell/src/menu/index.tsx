import { Home } from 'lucide-react';
import { managerCxMenu } from './manager_cx';
import { pcBuilderMenu } from './pc_builder';
import { productMenu } from './product';
import { MenuItem } from './types';

export const items: MenuItem[] = [
  {
    moduleName: 'Home',
    title: 'Home',
    url: '/',
    icon: Home,
  },
  ...managerCxMenu,
  ...pcBuilderMenu,
  ...productMenu,
];
