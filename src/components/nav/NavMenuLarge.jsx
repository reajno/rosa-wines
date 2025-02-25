import { Link } from "react-router-dom";
import { RiArrowDownLine } from "react-icons/ri";
import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { HStack } from "@chakra-ui/react";

const NavMenuLarge = () => {
  return (
    <HStack>
      <MenuRoot>
        <MenuTrigger asChild>
          <HStack>
            <Button variant="ghost">
              Our Wines
              <RiArrowDownLine />
            </Button>
          </HStack>
        </MenuTrigger>
        <MenuContent>
          <MenuItem asChild value="all" style={{ cursor: "pointer" }}>
            <Link to="/products">All</Link>
          </MenuItem>
          <MenuItem asChild value="red" style={{ cursor: "pointer" }}>
            <Link to="/products/category/red">Red</Link>
          </MenuItem>
          <MenuItem asChild value="white" style={{ cursor: "pointer" }}>
            <Link to="/products/category/white">White</Link>
          </MenuItem>
          <MenuItem asChild value="sparkling" style={{ cursor: "pointer" }}>
            <Link to="/products/category/sparkling">Sparkling</Link>
          </MenuItem>
        </MenuContent>
      </MenuRoot>
      <Button variant="ghost">Sale</Button>
      <Button variant="ghost">About</Button>
      <Button variant="ghost">Contact</Button>
    </HStack>
  );
};
export default NavMenuLarge;
