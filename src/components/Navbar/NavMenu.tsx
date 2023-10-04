import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { FaBars } from "react-icons/fa";
import RoutesList from "../RoutesList/RoutesList";
import { dashboardLinks, profileLinks } from "../RoutesList/links";

const NavMenu: React.FC = () => {
  const btnRef = React.useRef<null>(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        ref={btnRef}
        bg="primary"
        color="white"
        onClick={onOpen}
        p="0 0.6rem"
      >
        <Icon fontSize="1.4rem" as={FaBars} />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" fontSize="1.2rem" top="14px" />
          <DrawerHeader shadow="0 0 3px rgba(0,0,0,0.4)" bg="primary">
            <Flex
              position="relative"
              _before={{
                content: "''",
                position: "absolute",
                w: "100px",
                h: "1px",
                bg: "white",
                right: "50px",
                top: "13px",
              }}
              w="100%"
            >
              <Heading
                ml="0.2rem"
                as="h1"
                color="white"
                fontWeight={900}
                fontSize="1.4rem"
              >
                Chakra-UI
              </Heading>
            </Flex>
          </DrawerHeader>

          <DrawerBody w="100%">
            <Flex flexDirection="column" w="100%" gap="2rem" mt="1.4rem">
              <RoutesList onClose={onClose} isOpen={isOpen} routesLinks={dashboardLinks} />
              <RoutesList onClose={onClose} isOpen={isOpen} routesLinks={profileLinks} />
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMenu;
