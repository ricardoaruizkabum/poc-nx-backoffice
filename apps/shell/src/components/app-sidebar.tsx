import { ChevronRight, FolderKanban, Home } from 'lucide-react';
import { useState } from 'react';

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@kbm/ui';
import { Link } from 'react-router-dom';
import { SideBarFooter } from './app-sidebar-footer';

const items = [
  {
    title: 'Home',
    url: '/',
    icon: Home,
  },
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
  {
    title: 'Pc Builder',
    url: '/pc_builder',
    icon: FolderKanban,
    children: [
      {
        title: 'Page 1',
        url: '/pc_builder/page1',
        icon: FolderKanban,
      },
      {
        title: 'Page 2',
        url: '/pc_builder/page2',
        icon: FolderKanban,
      },
    ],
  },
  {
    title: 'Manager CX',
    url: '/manager_cx',
    icon: FolderKanban,
    children: [
      {
        title: 'Page 1',
        url: '/manager_cx/page1',
        icon: FolderKanban,
      },
      {
        title: 'Page 2',
        url: '/manager_cx/page2',
        icon: FolderKanban,
      },
    ],
  },
];

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:p-1.5!"
            >
              <Link to="/product/">
                <img src="favicon.ico" alt="logo" width={20} height={20} />
                <span>Manager - Product</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="mt-2.5">
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) =>
                item.children ? (
                  <CollapsibleMenuItem key={item.title} item={item} />
                ) : (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link to={item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ),
              )}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SideBarFooter />
    </Sidebar>
  );
}

type MenuItem = (typeof items)[number];

function CollapsibleMenuItem({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            <item.icon />
            <span>{item.title}</span>
            <ChevronRight
              className={`ml-auto transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children?.map((child) => (
              <SidebarMenuSubItem key={child.title}>
                <SidebarMenuSubButton asChild>
                  <Link to={child.url}>
                    <child.icon />
                    <span>{child.title}</span>
                  </Link>
                </SidebarMenuSubButton>
              </SidebarMenuSubItem>
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}
