import { Image, Box, VStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import AddToCartButton from "../Cart/AddToCartButton";

const ProductCard = ({ item }) => {
  const { name, price, image, slug } = item;

  return (
    <VStack align="center">
      <Box as={Link} to={`/products/${slug}`}>
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
        <AddToCartButton item={item} />
      </VStack>
    </VStack>
  );
};
export default ProductCard;
