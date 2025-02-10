import { IconButton } from "@chakra-ui/react";
import { RiUserLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Account = () => {
  return (
    <Link to="/login">
      <IconButton aria-label="account" colorPalette={"white"} variant="ghost">
        <RiUserLine />
      </IconButton>
    </Link>
  );
};
export default Account;
