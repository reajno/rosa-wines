import { VStack, Spinner, Text } from "@chakra-ui/react";

const LoadingSpinner = () => {
  return (
    <VStack position="fixed" h="50vh" w="100vw" zIndex="1000" justify="center">
      <Spinner size="xl" color="black" />
      <Text color="black" fontWeight="bold">
        Fetching Data...
      </Text>
    </VStack>
  );
};
export default LoadingSpinner;
