import NavMenuSmall from "./NavMenuSmall";
import NavMenuLarge from "./navMenuLarge";
import BrandLogo from "../BrandLogo";
import Cart from "./Cart";
import Account from "./Account";
import useWindowSize from "../../hooks/useWindowSize";
import { Container, Box, HStack } from "@chakra-ui/react";
const NavBar = () => {
  const { width } = useWindowSize();

  return (
    <Container
      as="header"
      fluid
      position="fixed"
      zIndex={50}
      className=" bg-bittersweet-400"
      py={6}
      px={{ md: "14" }}
    >
      <HStack
        mx="auto"
        as="nav"
        position="relative"
        alignItems="center"
        justify="space-between"
        maxW={"1440px"}
      >
        {width > 768 ? <NavMenuLarge /> : <NavMenuSmall />}

        <BrandLogo
          className={
            "absolute left-0 right-0 mx-auto max-w-20 flex justify-center"
          }
        />
        <HStack>
          <Account />
          <Cart />
        </HStack>
      </HStack>
    </Container>
  );
};
export default NavBar;
