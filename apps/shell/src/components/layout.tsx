import { SidebarInset, SidebarProvider } from '@kbm/ui';
import { Outlet } from 'react-router-dom';
import { ModuleProvider } from '../providers/module-provider';
import { ThemeProvider } from '../providers/theme-provider';
import { AppHeader } from './app-header/app-header';
import { AppSidebar } from './app-sidebar/app-sidebar';

export function Layout() {
  return (
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ModuleProvider>
        <div className="min-h-screen flex">
          <SidebarProvider>
            <AppSidebar variant="inset" />

            <SidebarInset>
              <AppHeader />

              <div className="flex flex-1 flex-col">
                <div className="@container/main flex flex-1 flex-col gap-2">
                  <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
                    <Outlet />
                  </div>
                </div>
              </div>
            </SidebarInset>
          </SidebarProvider>
        </div>
      </ModuleProvider>
    </ThemeProvider>
  );
}
