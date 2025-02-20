import { useState } from "react";
import {
  DrawerActionTrigger,
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "../ui/button";
import { Box, IconButton, Separator, VStack } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const NavMobileMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <Box>
      <DrawerRoot
        open={menuOpen}
        placement={"start"}
        onOpenChange={(e) => setMenuOpen(e.open)}
        size={{ base: "md", md: "sm" }}
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton colorPalette="white" variant="ghost">
            <RiMenuLine />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent rounded="md">
          <DrawerHeader>
            <DrawerTitle>Menu</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <VStack justify="space-evenly" h={"100%"}>
              <ul
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <li>
                  <Link to="/products" onClick={() => setMenuOpen(false)}>
                    <Button variant="ghost" w="100%" py="2rem">
                      All Wines
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/category/red"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Button variant="ghost" w="100%" py="2rem">
                      Red
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/category/white"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Button variant="ghost" w="100%" py="2rem">
                      White
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link
                    to="/products/category/sparkling"
                    onClick={() => setMenuOpen(false)}
                  >
                    <Button variant="ghost" w="100%" py="2rem">
                      Sparkling
                    </Button>
                  </Link>
                </li>
                <li>
                  <Link onClick={() => setMenuOpen(false)}>
                    <Button variant="ghost" w="100%" py="2rem">
                      Sale
                    </Button>
                  </Link>
                </li>
              </ul>
              <div style={{ width: "100%" }}>
                <Separator mb={6} />
                <ul
                  style={{
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <li style={{ width: "100%" }}>
                    <Button variant="ghost" w="100%" py="2rem">
                      About
                    </Button>
                  </li>
                  <li style={{ width: "100%" }}>
                    <Button variant="ghost" w="100%" py="2rem">
                      Contact
                    </Button>
                  </li>
                </ul>
              </div>
            </VStack>
          </DrawerBody>
          <DrawerFooter>
            <DrawerActionTrigger asChild>
              <Button variant="solid">Close</Button>
            </DrawerActionTrigger>
          </DrawerFooter>
          <DrawerCloseTrigger />
        </DrawerContent>
      </DrawerRoot>
    </Box>
  );
};
export default NavMobileMenu;
