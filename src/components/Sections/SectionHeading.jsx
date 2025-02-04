import { Center, Text } from "@chakra-ui/react";

const SectionHeading = ({ title, color = "black" }) => {
  return (
    <Center pb="2rem">
      <Text as="h1" textStyle="3xl" fontWeight="bold" color={color}>
        {title}
      </Text>
    </Center>
  );
};
export default SectionHeading;
