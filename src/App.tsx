import { RouterProvider } from 'react-router-dom';
import { router } from './Router/Routes';
import { Toaster } from 'react-hot-toast';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
