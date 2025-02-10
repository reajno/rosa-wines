import ProductCard from "./ProductCard";
import { SimpleGrid } from "@chakra-ui/react";
import products from "../../MOCK_DATA.json";
import SectionHeading from "../Sections/SectionHeading";

const ProductCatalog = ({ type }) => {
  return (
    <>
      <SectionHeading
        title={
          !type
            ? "All Wines"
            : type.charAt(0).toUpperCase() + type.slice(1) + " Wines"
        }
      />
      <SimpleGrid
        mx="auto"
        columns={{ base: 2, md: 3, lg: 4 }}
        rowGap={8}
        justifyItems="center"
        alignItems="start"
        px={{ base: 4, md: 8 }}
        columnGap={4}
        maxW={"900px"}
      >
        {!type
          ? products.map((product) => (
              <ProductCard key={product.id} item={product} />
            ))
          : products
              .filter((product) => product.type === type)
              .map((product) => (
                <ProductCard key={product.id} item={product} />
              ))}
      </SimpleGrid>
    </>
  );
};
export default ProductCatalog;
