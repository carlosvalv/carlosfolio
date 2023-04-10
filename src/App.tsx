import { RouterProvider } from 'react-router';
import { Main } from './pages/main';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    element: <Main />,
    path: "/",
  },
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
