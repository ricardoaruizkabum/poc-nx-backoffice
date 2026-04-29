import { Link, Routes, Route } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import NxWelcome from './nx-welcome';

export function App() {
  return (
    <>
      <nav className='flex gap-2 px-1 py-4 bg-gray-100'>
        <Link to=".">Manager CX</Link>
        <Link to="page1">Page 1</Link>
        <Link to="page2">Page 2</Link>
      </nav>

      <div className='px-10'>
        <Routes>
          <Route index element={<NxWelcome title="Manager CX" />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
