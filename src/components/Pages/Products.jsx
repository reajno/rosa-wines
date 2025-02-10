import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductCatalog from "../Product/ProductCatalog";
const Products = () => {
  const params = useParams();

  return (
    <Container fluid as="section" bgColor="white" py="4rem" px={0}>
      <ProductCatalog type={params.type} />
    </Container>
  );
};
export default Products;
