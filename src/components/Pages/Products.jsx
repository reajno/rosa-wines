import { Container } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import ProductCatalog from "../Product/ProductCatalog";
import useProduct from "@/hooks/useProduct";

const Products = () => {
  const params = useParams();
  const { loading } = useProduct();
  return (
    <Container
      fluid
      as="section"
      bgColor="white"
      py="4rem"
      px={0}
      h={loading ? "100vh" : "auto"}
    >
      <ProductCatalog type={params.type} />
    </Container>
  );
};
export default Products;
