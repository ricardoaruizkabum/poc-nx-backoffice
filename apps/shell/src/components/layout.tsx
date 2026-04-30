import { Link, Outlet } from 'react-router-dom';

export function Layout() {
  return (
    <div className="min-h-screen flex">
      <div className="min-w-48 p-4 bg-gray-200">
        <ul className="space-y-4">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/product">Product</Link>
            <ul className="ml-4">
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
            <ul className="ml-4">
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
            <ul className="ml-4">
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

      <div className="flex flex-1 flex-col">
        <div className="@container/main flex flex-1 flex-col gap-2">
          <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 px-4 lg:px-6">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
