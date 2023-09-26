import React from "react";
import { Flex, Button, Box } from "@chakra-ui/react";
import RoutesList from "./RoutesList";
import { dashboardLinks, profileLinks } from "./links";
import HelpCard from "./HelpCard";
import { IoIosArrowForward } from "react-icons/io";
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
    >
      <Flex flex="1" h="100%" w="100%" flexDirection="column">
        <Flex justifyContent={isOpen ? "flex-end" : "center"}>
          <Button
            bg="white"
            color="primary"
            onClick={toggleSidebar}
            w="60px"
            h="60px"
            borderRadius="50%"
          >
            <Icon
              as={IoIosArrowForward}
              transition="all 0.4s ease"
              transform={isOpen ? "rotate(180deg)" : "rotate(0)"}
              fontSize="2.2rem"
            />
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
