import React, { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import NxWelcome from '../app/nx-welcome';
import { Layout } from '../components/layout';

const Product = React.lazy(() => import('product/Module'));
const PcBuilder = React.lazy(() => import('pc_builder/Module'));
const ManagerCx = React.lazy(() => import('manager_cx/Module'));

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <NxWelcome title="shell" />
          </Suspense>
        ),
      },
      {
        path: '/product/*',
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <Product />
          </Suspense>
        ),
      },
      {
        path: '/pc_builder/*',
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <PcBuilder />
          </Suspense>
        ),
      },
      {
        path: '/manager_cx/*',
        element: (
          <Suspense fallback={<p>Loading</p>}>
            <ManagerCx />
          </Suspense>
        ),
      },
    ],
  },
]);
