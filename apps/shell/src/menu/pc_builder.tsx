import { FolderKanban, MemoryStick, Microchip } from 'lucide-react';

export const pcBuilderMenu = [
  {
    title: 'PC Builder',
    url: '/pc_builder',
    icon: FolderKanban,
    children: [
      {
        title: 'Processador',
        url: '/pc_builder/page1',
        icon: Microchip,
      },
      {
        title: 'Memória',
        url: '/pc_builder/page2',
        icon: MemoryStick,
      },
    ],
  },
];
