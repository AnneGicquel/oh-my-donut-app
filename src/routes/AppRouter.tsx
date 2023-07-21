import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTES } from "./Routes";

const AppRouter = () => {
  const router = createBrowserRouter(ROUTES);

  return <RouterProvider router={router} />;
};

export default AppRouter;
