import { IconButton } from "@chakra-ui/react";
import { RiUserLine } from "react-icons/ri";

const Account = () => {
  return (
    <IconButton
      as="a"
      href="/login"
      aria-label="account"
      colorPalette={"white"}
      variant="ghost"
    >
      <RiUserLine />
    </IconButton>
  );
};
export default Account;
