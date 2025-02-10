import { Box, VStack, HStack, Image, Text } from "@chakra-ui/react";
import { RiArrowRightLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const CategoryCard = ({ title, src }) => {
  return (
    <Box
      as={Link}
      to={`/products/category/${title.toLowerCase()}`}
      maxW={{
        base: "calc(50vw - 1.5rem)",
        md: "calc((100vw - 5rem) / 3)",
        lg: "300px",
      }}
      href="#"
    >
      <VStack spacing={2} w="100%" h="100%">
        <Image src={src} alt="red wine" rounded="md" />
        <HStack alignSelf={"flex-start"}>
          <Text as={"h2"} textStyle="lg">
            {title}
          </Text>
          <RiArrowRightLine />
        </HStack>
      </VStack>
    </Box>
  );
};
export default CategoryCard;
