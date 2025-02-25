import { IconButton } from "@chakra-ui/react";
import { RiUserLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import { MenuRoot, MenuTrigger, MenuContent, MenuItem } from "../ui/menu";
import { toaster } from "../ui/toaster";
import useAuth from "@/hooks/useAuth";

const Account = () => {
  const location = useLocation();

  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    toaster.create({
      description: `You have been logged out`,
      type: "info",
    });
  };

  return (
    <MenuRoot positioning={{ placement: "bottom-end" }}>
      <MenuTrigger asChild>
        <IconButton colorPalette={"white"} variant={"ghost"}>
          <RiUserLine />
        </IconButton>
      </MenuTrigger>
      {!user ? (
        <MenuContent>
          <MenuItem asChild value="login" style={{ cursor: "pointer" }}>
            <Link to="/login" state={{ from: location }}>
              Login
            </Link>
          </MenuItem>
          <MenuItem asChild value="register" style={{ cursor: "pointer" }}>
            <Link to="/register" state={{ from: location }}>
              Register
            </Link>
          </MenuItem>
        </MenuContent>
      ) : (
        <MenuContent>
          <MenuItem asChild value="dashboard" style={{ cursor: "pointer" }}>
            <Link to="/dashboard" state={{ from: location }}>
              Dashboard
            </Link>
          </MenuItem>
          <MenuItem
            asChild
            value="logout"
            style={{ cursor: "pointer" }}
            onClick={handleLogout}
          >
            <Link to="/">Logout</Link>
          </MenuItem>
        </MenuContent>
      )}
    </MenuRoot>
  );
};
export default Account;
