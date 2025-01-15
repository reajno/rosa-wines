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
import { Box, IconButton } from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";

const Cart = () => {
  const [cartOpen, setCartOpen] = useState(false);

  return (
    <Box>
      <DrawerRoot
        open={cartOpen}
        placement={"end"}
        onOpenChange={(e) => setCartOpen(e.open)}
        size={"xs"}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton colorPalette={"white"} variant="ghost">
            <RiShoppingCartLine />
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
    </Box>
  );
};
export default Cart;
