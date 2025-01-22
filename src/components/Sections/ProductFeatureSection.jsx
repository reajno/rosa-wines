import { Box, Container } from "@chakra-ui/react";
import Carousel from "../Carousel";

const ProductFeatureSection = () => {
  return (
    <Box as="section" bgColor={"green.200"}>
      <Container py="4rem">
        <Carousel />
      </Container>
    </Box>
  );
};
export default ProductFeatureSection;
