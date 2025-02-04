import { Image, Box, Button, VStack, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddToCartButton from "../Cart/AddToCartButton";

const ProductCard = ({ name, price, image, route, product }) => {
  return (
    <VStack align="center">
      <Box as={Link} to={`/products/${route}`}>
        <Image
          src={image}
          alt={name}
          w="100%"
          fit="cover"
          objectPosition="center"
        />
      </Box>
      <VStack w="100%" py={4} color="black">
        <Text fontSize={{ base: "sm" }} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize={{ lg: "lg" }}>
          $<span>{price}</span>
        </Text>
        <AddToCartButton product={product} productName={name} />
      </VStack>
    </VStack>
  );
};
export default ProductCard;
