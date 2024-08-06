import { RouterProvider } from "react-router";
import { Main } from "./pages/main";
import { createBrowserRouter } from "react-router-dom";
import {
  isLandscapeMobileContext,
  useIsLandscapeMobile,
} from "./context/landscapeMobile";

const router = createBrowserRouter([
  {
    element: <Main />,
    path: "/",
  },
]);

function App() {
  const isLandscape = useIsLandscapeMobile();

  return (
    <isLandscapeMobileContext.Provider value={isLandscape}>
      <RouterProvider router={router} />
    </isLandscapeMobileContext.Provider>
  );
}

export default App;
