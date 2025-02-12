import { IconButton } from "@chakra-ui/react";
import { RiUserLine } from "react-icons/ri";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Account = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate("/login", { state: { from: location } });
  };

  return (
    <IconButton
      onClick={handleClick}
      aria-label="account"
      colorPalette={"white"}
      variant="ghost"
    >
      <RiUserLine />
    </IconButton>
  );
};
export default Account;
