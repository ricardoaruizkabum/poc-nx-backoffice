import { LogOut } from 'lucide-react';
// import { useAuth } from '@/providers/AuthProvider'
import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from '@kbm/ui';

export const UserOptions = () => {
  // const { logout } = useAuth();

  return (
    <DropdownMenuContent sideOffset={10}>
      <DropdownMenuSeparator />
      {/* <DropdownMenuItem variant='destructive' onClick={() => logout()}> */}
      <DropdownMenuItem variant="destructive" onClick={() => {}}>
        <LogOut className="h-[1.2rem] w-[1.2rem] mr-2" />
        Sair
      </DropdownMenuItem>
    </DropdownMenuContent>
  );
};
