import { RiArrowDownLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { Link, HStack, Box } from "@chakra-ui/react";

const NavMenuLarge = () => {
  return (
    <HStack>
      <MenuRoot>
        <MenuTrigger asChild>
          <HStack>
            <Button variant="ghost">
              Menu
              <RiArrowDownLine />
            </Button>
          </HStack>
        </MenuTrigger>
        <MenuContent>
          <MenuItem asChild>
            <Link href="#">Item 1</Link>
          </MenuItem>
          <MenuItem asChild>
            <Link href="#">Item 2</Link>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
      <Button as="a" href="#" variant="ghost">
        Sale
      </Button>
      <Button variant="ghost">About</Button>
      <Button variant="ghost">Contact</Button>
    </HStack>
  );
};
export default NavMenuLarge;
