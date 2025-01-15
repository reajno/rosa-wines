import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import NavBar from "./components/nav/NavBar";
import NavSpacer from "./components/NavSpacer";
import Home from "./components/home";
import Login from "./components/user/login";
import Register from "./components/user/register";
import NotFound from "./components/notFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <NavSpacer />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <Route path="/logout" element={<Navigate to="/" replace />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
