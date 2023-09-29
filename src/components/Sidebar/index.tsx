import React from "react";
import { Flex, Button, Box, Heading } from "@chakra-ui/react";
import RoutesList from "./RoutesList";
import { dashboardLinks, profileLinks } from "./links";
import HelpCard from "./HelpCard";
import { FaBars } from "react-icons/fa";
import { Icon } from "@chakra-ui/icons";

const Sidebar: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState<boolean>(
    localStorage.getItem("isOpen") === "true" || false
  );

  React.useEffect(() => {
    localStorage.setItem("isOpen", isOpen.toString());
  }, [isOpen]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Flex
      h="100%"
      w={isOpen ? "300px" : "90px"}
      transition="all 0.4s ease"
      p={isOpen ? "1.6rem" : "1rem"}
      bg={isOpen ? "transparent" : "primary"}
      display={{ base: "none", xl: "block" }}
      shadow="md"
    >
      <Flex flex="1" h="100%" w="100%" flexDirection="column">
        <Flex
          justifyContent={isOpen ? "flex-end" : "center"}
          position="relative"
        >
          <Heading
            as="h1"
            fontSize="1.6rem"
            position="absolute"
            left="0"
            top="12px"
            color="primary"
            transition="all 0.4s ease"
            transform={isOpen ? "translateX(0)" : "translateX(-300px)"}
          >
            Chakra-UI
          </Heading>
          <Button
            bg="white"
            color="primary"
            onClick={toggleSidebar}
            w="60px"
            h="60px"
            borderRadius="50%"
          >
            <Icon as={FaBars} fontSize="1.8rem" />
          </Button>
        </Flex>

        <Flex flexDirection="column" gap="2rem" mt="2.4rem">
          <RoutesList isOpen={isOpen} routesLinks={dashboardLinks} />
          <RoutesList isOpen={isOpen} routesLinks={profileLinks} />
        </Flex>

        <Box mt="4rem">
          <HelpCard isOpen={isOpen} />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Sidebar;
