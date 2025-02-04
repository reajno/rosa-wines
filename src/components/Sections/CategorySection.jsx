import { chardonnay, pinotNoir, prosecco } from "@/utils/assets";
import { Text, HStack, Container, Center, Box } from "@chakra-ui/react";
import CategoryCard from "../CategoryCard";
import SectionHeading from "./SectionHeading";

const ProductSection = () => {
  return (
    <Box as="section" className="bg-slate-400">
      <Container py="4rem">
        <SectionHeading title="Shop By Category" color="white" />
        <HStack
          gap={"1rem"}
          wrap={{ md: "nowrap" }}
          justify="center"
          align="start"
        >
          <CategoryCard title={"Red"} src={pinotNoir} />
          <CategoryCard title={"White"} src={chardonnay} />
          <CategoryCard title={"Sparkling"} src={prosecco} />
        </HStack>
      </Container>
    </Box>
  );
};
export default ProductSection;
