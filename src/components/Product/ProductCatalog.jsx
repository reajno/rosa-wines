import useCartStore from "../../hooks/useCartStore";
import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import products from "../../MOCK_DATA.json";

const ProductCatalog = () => {
  const { addToCart } = useCartStore();

  return (
    <SimpleGrid
      columns={{ base: 2, md: 3, lg: 4 }}
      rowGap={8}
      justifyItems="center"
      alignItems="start"
      px={{ base: 4, md: 8 }}
      columnGap={4}
      maxW={"900px"}
    >
      {products.map((product) => (
        <ProductCard
          key={product.id}
          name={product.title}
          image={product.image}
          price={product.price}
          route={product.sku}
          product={product}
        />
      ))}
    </SimpleGrid>
  );
};
export default ProductCatalog;
