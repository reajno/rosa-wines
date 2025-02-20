import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./components/Pages/Home";
import Login from "./components/user/login";
import Register from "./components/user/register";
import NotFound from "./components/Pages/NotFound";
import Products from "./components/Pages/Products";
import ProductDetail from "./components/Pages/ProductDetail";
import productLoader from "./utils/productLoader";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Pages/Dashboard";
import authLoader from "./utils/authLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/dashboard", element: <Dashboard />, loader: authLoader },
      { path: "/products", element: <Products /> },
      {
        path: "/products/:slug",
        element: <ProductDetail />,
        loader: productLoader,
      },
      {
        path: "/products/category/:type",
        element: <Products />,
        loader: productLoader,
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
