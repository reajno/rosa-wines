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
import Cart from "./CartContent";
import useCartStore from "@/hooks/useCartStore";

const CartToggle = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { clearCart } = useCartStore();
  return (
    <Box>
      <DrawerRoot
        open={cartOpen}
        placement={"end"}
        onOpenChange={(e) => setCartOpen(e.open)}
        size={"md"}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton colorPalette={"white"} variant="ghost">
            <RiShoppingCartLine />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent rounded="md">
          <DrawerHeader>
            <DrawerTitle>Cart</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Cart />
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" onClick={clearCart}>
              Clear Cart
            </Button>
            <DrawerActionTrigger asChild>
              <Button variant="solid">Close</Button>
            </DrawerActionTrigger>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
};
export default CartToggle;
