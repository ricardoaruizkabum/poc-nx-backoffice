import { ChevronRight } from 'lucide-react';
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
import { Link, useLocation } from 'react-router-dom';
import { items } from '../../menu';
import { useModule } from '../../providers/module-provider';
import { SideBarFooter } from './app-sidebar-footer';

type MenuItem = {
  title: string;
  url: string;
  icon?: React.ElementType;
  children?: MenuItem[];
};

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
                <span>Backoffice</span>
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
                  <CollapsibleMenuItem
                    key={item.title}
                    item={item}
                    moduleName={item.moduleName}
                  />
                ) : (
                  <SimpleMenuItem
                    key={item.title}
                    item={item}
                    moduleName={item.moduleName}
                  />
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

function SimpleMenuItem({
  item,
  moduleName,
}: {
  item: MenuItem;
  moduleName: string;
}) {
  const location = useLocation();
  const isActive = location.pathname === item.url;
  const { setModuleName } = useModule();
  return (
    <SidebarMenuItem>
      <SidebarMenuButton asChild isActive={isActive}>
        <Link to={item.url} onClick={() => setModuleName(moduleName)}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuButton>
    </SidebarMenuItem>
  );
}

function CollapsibleMenuItem({
  item,
  moduleName,
}: {
  item: MenuItem;
  moduleName: string;
}) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen} asChild>
      <SidebarMenuItem>
        <CollapsibleTrigger asChild>
          <SidebarMenuButton>
            {item.icon && <item.icon />}
            <span>{item.title}</span>
            <ChevronRight
              className={`ml-auto transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
            />
          </SidebarMenuButton>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <SidebarMenuSub>
            {item.children?.map((child) => (
              <SubMenuItem
                key={child.title}
                item={child}
                moduleName={moduleName}
              />
            ))}
          </SidebarMenuSub>
        </CollapsibleContent>
      </SidebarMenuItem>
    </Collapsible>
  );
}

function SubMenuItem({
  item,
  moduleName,
}: {
  item: MenuItem;
  moduleName: string;
}) {
  const location = useLocation();
  const { setModuleName } = useModule();
  const [open, setOpen] = useState(false);

  if (item.children) {
    return (
      <SidebarMenuSubItem>
        <Collapsible open={open} onOpenChange={setOpen}>
          <CollapsibleTrigger asChild>
            <SidebarMenuSubButton isActive={location.pathname === item.url}>
              {item.icon && <item.icon />}
              <span>{item.title}</span>
              <ChevronRight
                className={`ml-auto transition-transform duration-200 ${open ? 'rotate-90' : ''}`}
              />
            </SidebarMenuSubButton>
          </CollapsibleTrigger>
          <CollapsibleContent>
            <SidebarMenuSub>
              {item.children.map((child) => (
                <SubMenuItem
                  key={child.title}
                  item={child}
                  moduleName={moduleName}
                />
              ))}
            </SidebarMenuSub>
          </CollapsibleContent>
        </Collapsible>
      </SidebarMenuSubItem>
    );
  }

  return (
    <SidebarMenuSubItem>
      <SidebarMenuSubButton asChild isActive={location.pathname === item.url}>
        <Link to={item.url} onClick={() => setModuleName(moduleName)}>
          {item.icon && <item.icon />}
          <span>{item.title}</span>
        </Link>
      </SidebarMenuSubButton>
    </SidebarMenuSubItem>
  );
}
