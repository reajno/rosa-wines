import { Button } from "../ui/button";
import { Link, Container, Box, Text, VStack, Flex } from "@chakra-ui/react";
const HeroSection = () => {
  return (
    <Container fluid h="70vh" alignContent="center" bg={"blue.700"}>
      <VStack gap={2}>
        <Text as="h1" textStyle="6xl" fontWeight="bold">
          Discover Exquisite Wines
        </Text>
        <Text textStyle="xl">
          Curated selection of the finest wines from around the world
        </Text>
        <Button as="a" href="#" mt="4" className="bg-gray-400 ">
          Explore Our Collection
        </Button>
      </VStack>
    </Container>
  );
};
export default HeroSection;
