import { Button } from "../ui/button";
import { MenuContent, MenuItem, MenuRoot, MenuTrigger } from "../ui/menu";
import { Link, HStack } from "@chakra-ui/react";
import { ChevronDown } from "lucide-react";

const NavMenuLarge = () => {
  return (
    <div className="flex gap-4">
      <MenuRoot>
        <MenuTrigger asChild>
          <HStack>
            <Button variant="solid">
              Menu
              <ChevronDown />
            </Button>
          </HStack>
        </MenuTrigger>
        <MenuContent>
          <MenuItem> LINK 1</MenuItem>
          <MenuItem> LINK 2</MenuItem>
          <MenuItem> LINK 3</MenuItem>
        </MenuContent>
      </MenuRoot>
      <Link href="/">
        <Button>Sale</Button>
      </Link>
      <Link href="/">
        <Button>About</Button>
      </Link>
      <Link href="/">
        <Button>Contact</Button>
      </Link>
    </div>
  );
};
export default NavMenuLarge;
