import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Pages/Home";
import Login from "./components/user/login";
import Register from "./components/user/register";
import NotFound from "./components/Pages/NotFound";
import Products from "./components/Pages/Products";
import ProductDetail from "./components/Pages/ProductDetail";
import loader from "./utils/loader";
import MainLayout from "./layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/products", element: <Products /> },
      {
        path: "/products/:slug",
        element: <ProductDetail />,
        loader: loader,
      },
      {
        path: "/products/category/:type",
        element: <Products />,
        loader: loader,
      },
      { path: "/not-found", element: <NotFound /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
