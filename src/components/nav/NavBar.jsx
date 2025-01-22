import NavMenuSmall from "./NavMenuSmall";
import NavMenuLarge from "./navMenuLarge";
import BrandLogo from "../BrandLogo";
import CartToggle from "../Cart/CartToggle";
import Account from "./Account";
import useWindowSize from "../../hooks/useWindowSize";
import { Container, Box, HStack, AbsoluteCenter } from "@chakra-ui/react";
const NavBar = () => {
  const { width } = useWindowSize();

  return (
    <>
      <Container
        as="header"
        fluid
        position="fixed"
        zIndex={50}
        bgColor={"red.400"}
        py={4}
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
          {width > 992 ? <NavMenuLarge /> : <NavMenuSmall />}
          <AbsoluteCenter mx="auto" justifyContent="center">
            <BrandLogo />
          </AbsoluteCenter>
          <HStack>
            <Account />
            <CartToggle />
          </HStack>
        </HStack>
      </Container>
      {/* NAV SPACER */}
      <Box h="4.5rem" w="100%" />
    </>
  );
};
export default NavBar;
