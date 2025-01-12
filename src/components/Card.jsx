import { Box, Image, HStack, Icon, Text } from "@chakra-ui/react";
import { Star } from "lucide-react";

const Card = ({ src, title, type, rating, description }) => {
  return (
    <Box as="a" href="#" maxW="sm" className="flex flex-col">
      <Image src={src} alt="" rounded="md" className="mb-4" />
      <Box>
        <HStack className="flex justify-between">
          <Text className="text-xl font-bold">{title}</Text>
          <HStack>
            <Icon color="orange">
              <Star />
            </Icon>
            <Text>{rating}</Text>
          </HStack>
        </HStack>
        <Text className="text-lg ">{type}</Text>
      </Box>
      <Text className="mt-4 text-slate-200">{description}</Text>
    </Box>
  );
};
export default Card;
