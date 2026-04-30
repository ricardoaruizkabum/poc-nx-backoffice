import NxWelcome from '../app/nx-welcome';
import Page1 from '../app/pages/page1';
import Page2 from '../app/pages/page2';

type Route = {
  path: string;
  element: React.ReactNode;
  index?: boolean;
};

export const routes: Route[] = [
  {
    path: '/',
    element: <NxWelcome title="Product" />,
    index: true,
  },
  {
    path: 'page1',
    element: <Page1 />,
  },
  {
    path: 'page2',
    element: <Page2 />,
  },
];
