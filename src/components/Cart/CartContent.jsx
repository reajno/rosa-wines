import {
  Box,
  Button,
  HStack,
  VStack,
  Image,
  Group,
  Text,
  Float,
} from "@chakra-ui/react";
import useCartStore from "../../hooks/useCartStore";

const Cart = () => {
  const { cart, addToCart, removeFromCart } = useCartStore();

  return (
    <>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <HStack justify="space-between" h="70px" mb={8}>
                  <HStack justify="center" align="start">
                    <Image
                      src={item.image}
                      h="70px"
                      w="70px"
                      borderRadius="md"
                    />
                    <Text fontSize={"md"} fontWeight="bold">
                      {item.name}
                    </Text>
                  </HStack>
                  <VStack>
                    <HStack
                      gap={0}
                      alignSelf="end"
                      maxW="100px"
                      fontSize={"md"}
                    >
                      $<span>{item.price * item.quantity} AUD</span>
                    </HStack>
                    <HStack
                      borderWidth="2px"
                      borderRadius="md"
                      borderColor="gray.500"
                      gap={0}
                      w="100%"
                    >
                      <Button
                        onClick={() => removeFromCart(item)}
                        colorPalette="white"
                        variant="outline"
                      >
                        -
                      </Button>

                      <Text minWidth="50px" textAlign="center">
                        {item.quantity}
                      </Text>
                      <Button
                        onClick={() => addToCart(item)}
                        colorPalette="white"
                        variant="outline"
                      >
                        -
                      </Button>
                    </HStack>
                  </VStack>
                </HStack>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
export default Cart;
