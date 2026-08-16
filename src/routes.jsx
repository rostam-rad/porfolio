import { Home } from "containers/homePage";
import { NotFound } from "containers/notFound";

export const publicRoutes = [
  { path: "/", element: <Home /> },
  { path: "/home", element: <Home /> },
  { path: "*", element: <NotFound /> },
];
