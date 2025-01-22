import { VStack } from "@chakra-ui/react";

import ProductList from "../Product/ProductList";

const ProductListSection = () => {
  return (
    <VStack bgColor="white">
      <ProductList />
    </VStack>
  );
};
export default ProductListSection;
