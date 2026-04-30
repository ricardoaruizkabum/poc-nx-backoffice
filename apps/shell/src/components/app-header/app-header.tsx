import {
  DropdownMenu,
  DropdownMenuTrigger,
  Separator,
  SidebarTrigger,
} from '@kbm/ui';
import { SwitchTheme } from './app-switch-theme';
import { UserOptions } from './app-user-options';

export const AppHeader = () => {
  return (
    <header className="flex h-(--header-height) shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-(--header-height)">
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mx-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-base font-medium">Backoffice</h1>
        <div className="ml-auto flex items-center gap-6">
          <SwitchTheme />
          <DropdownMenu>
            <DropdownMenuTrigger>
              <p>UR</p>
              {/* <Avatar>
                <AvatarImage src="avatar.png" />
                <AvatarFallback>NINJA</AvatarFallback>
              </Avatar> */}
            </DropdownMenuTrigger>
            <UserOptions />
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};
