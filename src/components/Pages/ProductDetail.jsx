import { useLoaderData } from "react-router-dom";
import {
  SimpleGrid,
  Image,
  Text,
  Container,
  VStack,
  Stack,
  HStack,
  Button,
  Icon,
  Box,
  Badge,
} from "@chakra-ui/react";
import { RiStarFill } from "react-icons/ri";
import AddToCartButton from "../Cart/AddToCartButton";

const ProductDetail = () => {
  const product = useLoaderData();
  if (!product) return null;

  return (
    <>
      <Container bgColor="white">
        <Box maxW="1200px" mx="auto" p={{ base: 4, md: 8 }} bgColor="white">
          {/* Stack for mobile, HStack for larger screens */}
          <Stack
            direction={{ base: "column", md: "row" }}
            gap={{ base: 4, md: 8 }}
          >
            {/* Product Image */}
            <Box flex={1}>
              <Image
                src={product.image}
                alt={product.name}
                borderRadius="lg"
                w="100%"
              />
            </Box>

            {/* Product Details */}
            <VStack flex={1} align="start" color="black" gap={2}>
              {/* Product Title */}
              <Text
                as="h2"
                fontSize={{ base: "xl", md: "2xl" }}
                fontWeight="bold"
              >
                {product.name}
              </Text>
              {/* Product Reviews */}
              <HStack gap={1}>
                <Text as="h2" textStyle="md">
                  ({product.reviews.length})
                </Text>
                <Text as="h2" textStyle="md">
                  4.5
                </Text>
                <Icon>
                  <RiStarFill />
                </Icon>
              </HStack>
              {/* Price */}
              <Text
                fontSize={{ base: "2xl", md: "2xl" }}
                fontWeight="bold"
                color="teal.500"
              >
                $<span>{product.price}</span>
              </Text>

              {/* Product Description */}
              <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" my={4}>
                {product.description}
              </Text>
              <AddToCartButton item={product} />
            </VStack>
          </Stack>
        </Box>
      </Container>
    </>
  );
};
export default ProductDetail;
