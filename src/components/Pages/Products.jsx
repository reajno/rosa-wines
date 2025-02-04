import { Container } from "@chakra-ui/react";
import ProductListSection from "../Sections/ProductListSection";
import SectionHeading from "../Sections/SectionHeading";

const Products = () => {
  return (
    <Container fluid as="section" bgColor="white" py="4rem" px={0}>
      <SectionHeading title="Our Wines" />
      <ProductListSection />
    </Container>
  );
};
export default Products;
