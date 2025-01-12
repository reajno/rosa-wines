import { useState } from "react";

import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { IconButton } from "@chakra-ui/react";
import { Menu } from "lucide-react";

const NavMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <DrawerRoot
        open={menuOpen}
        placement={"start"}
        onOpenChange={(e) => setMenuOpen(e.open)}
        size={"xs"}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton>
            <Menu />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent rounded="md">
          <DrawerHeader>
            <DrawerTitle>Our Wines</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <ul>
              <li>
                <a href="/">LINK 1</a>
              </li>
              <li>
                <a href="/">LINK 2</a>
              </li>
              <li>
                <a href="/">LINK 3</a>
              </li>
            </ul>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="outline">Close</Button>
            </DrawerActionTrigger>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
};
export default NavMobileMenu;
