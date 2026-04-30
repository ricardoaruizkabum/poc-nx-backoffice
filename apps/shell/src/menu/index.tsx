import { Home } from 'lucide-react';
import { managerCxMenu } from './manager_cx';
import { pcBuilderMenu } from './pc_builder';
import { productMenu } from './product';

type MenuItem = {
  title: string;
  url: string;
  icon: React.ComponentType;
  children?: MenuItem[];
};

export const items: MenuItem[] = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
  ...productMenu,
  ...pcBuilderMenu,
  ...managerCxMenu,
];
