import {
  Image,
  Box,
  Link,
  Button,
  VStack,
  Center,
  Text,
} from "@chakra-ui/react";

const ProductCard = (props) => {
  const { id, name, price, image, sku, onClick } = props;

  return (
    <VStack key={id} align="center">
      <Image
        src={image}
        alt={name}
        w="100%"
        fit="cover"
        objectPosition="center"
      />

      <VStack w="100%" py={4} color="black">
        <Text fontSize={{ base: "sm" }} fontWeight="bold">
          {name}
        </Text>
        <Text fontSize={{ lg: "lg" }}>
          $<span>{price}</span>
        </Text>
        <Button colorPalette="green" as="a" size={"sm"} onClick={onClick}>
          Add to Cart
        </Button>
      </VStack>
    </VStack>
  );
};
export default ProductCard;