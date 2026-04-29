import * as React from 'react';
import NxWelcome from './nx-welcome';
import { Link, Route, Routes } from 'react-router-dom';

const Product = React.lazy(() => import('product/Module'));
const PcBuilder = React.lazy(() => import('pc_builder/Module'));
const ManagerCx = React.lazy(() => import('manager_cx/Module'));

export function App() {
  return (
    <React.Suspense fallback={null}>
      <div className='flex h-screen'>
        <div className='min-w-48 p-4 bg-gray-200'>
          <ul className='space-y-4'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/product">Product</Link>
              <ul className='ml-4'>
                <li>
                  <Link to="/product/page1">Product - Page 1</Link>
                </li>
                <li>
                  <Link to="/product/page2">Product - Page 2</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="/pc_builder">PcBuilder</Link>
              <ul className='ml-4'>
                <li>
                  <Link to="/pc_builder/page1">Pc Builder - Page 1</Link>
                </li>
                <li>
                  <Link to="/pc_builder/page2">Pc Builder - Page 2</Link>
                </li>
              </ul>          
            </li>
            <li>
              <Link to="/manager_cx">Manager CX</Link>
              <ul className='ml-4'>
                <li>
                  <Link to="/manager_cx/page1">Manager CX - Page 1</Link>
                </li>
                <li>
                  <Link to="/manager_cx/page2">Manager CX - Page 2</Link>
                </li>
              </ul>
            </li>
          </ul>

        </div>

        <div className='flex-1'>
          <Routes>
            <Route path="/" element={<NxWelcome title="shell" />} />
            <Route path="/product/*" element={<Product />} />
            <Route path="/pc_builder/*" element={<PcBuilder />} />
            <Route path="/manager_cx/*" element={<ManagerCx />} />
          </Routes>
        </div>
      </div>
    </React.Suspense>
  );
}

export default App;
