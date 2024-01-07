import { RouterProvider } from "react-router";
import { Main } from "./pages/main";
import { createBrowserRouter } from "react-router-dom";
import { isMobile, isTablet, useMobileOrientation } from "react-device-detect";
import { isLandscapeMobileContext } from "./context/landscapeMobile";

const router = createBrowserRouter([
  {
    element: <Main />,
    path: "/",
  },
]);

function App() {
  const { isLandscape } = useMobileOrientation();
  return (
    <isLandscapeMobileContext.Provider value={isLandscape && isMobile && !isTablet}>
      <RouterProvider router={router} />
    </isLandscapeMobileContext.Provider>
  );
}

export default App;
