import NavBar from "@/components/Nav/NavBar";
import { Toaster } from "@/components/ui/toaster";
import ScrollToTop from "@/utils/ScrollToTop";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <NavBar />
      <Toaster />
      <ScrollToTop />
      <Outlet />
    </>
  );
};
export default MainLayout;
