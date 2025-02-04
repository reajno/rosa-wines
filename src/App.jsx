import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import Home from "./components/Pages/Home";
import Login from "./components/user/login";
import Register from "./components/user/register";
import NotFound from "./components/Pages/NotFound";
import Products from "./components/Pages/Products";
import ProductDetail from "./components/Pages/ProductDetail";
import { Toaster } from "./components/ui/toaster";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:sku" element={<ProductDetail />} />

          {/* <Route path="/logout" element={<Navigate to="/" replace />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
