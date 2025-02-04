import { IconButton } from "@chakra-ui/react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <IconButton
      as={Link}
      to="/login"
      aria-label="account"
      colorPalette={"white"}
      variant="ghost"
    >
      <RiUserLine />
    </IconButton>
  );
};
export default Account;
