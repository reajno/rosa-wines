import { useState } from "react";
import {
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
import { Box, IconButton, Text, Float, Badge } from "@chakra-ui/react";
import { RiShoppingCartLine } from "react-icons/ri";
import Cart from "./CartContent";
import useCartStore from "@/hooks/useCartStore";

const CartToggle = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const { totalItems } = useCartStore();
  return (
    <Box>
      <DrawerRoot
        open={cartOpen}
        placement={"end"}
        onOpenChange={(e) => setCartOpen(e.open)}
        size={{ base: "md", md: "sm" }}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton colorPalette={"white"} variant="ghost">
            <RiShoppingCartLine />
            {totalItems().quantity !== 0 ? (
              <Float>
                <Badge colorPalette="white">{totalItems().quantity}</Badge>
              </Float>
            ) : (
              ""
            )}
          </IconButton>
        </DrawerTrigger>
        <DrawerContent rounded="md">
          <DrawerHeader>
            <DrawerTitle>Cart</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Cart />
          </DrawerBody>
          <DrawerFooter justifyContent="space-between" py={4}>
            <Text fontSize="lg">
              TOTAL: $<span>{totalItems().price} </span>AUD
            </Text>
            <Button variant="solid">Checkout</Button>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
};
export default CartToggle;
