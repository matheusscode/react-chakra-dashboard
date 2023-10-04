import React from "react";
import {
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import RoutePath from "./RoutePath";
import { Icon } from "@chakra-ui/icons";
import { FaUser } from "react-icons/fa";
import { BiSearchAlt2 } from "react-icons/bi";

import Widget from "../Widget";
import { AiFillSetting } from "react-icons/ai";
import { IoIosNotifications } from "react-icons/io";
import NavMenu from "./NavMenu";
import NavSearch from "./NavSearch";
import useLoading from "../../hooks/useLoading";

const Navbar: React.FC = () => {
  const location = useLocation();

  const { isLoading } = useLoading();

  let pathRoute;

  if (location.pathname === "/") {
    pathRoute = "Dashboard";
  } else if (location.pathname === "/billing") {
    pathRoute = "Billing";
  } else if (location.pathname === "/tables") {
    pathRoute = "Tables";
  }

  return (
    <Flex
      w="100%"
      bg="transparent"
      alignItems="center"
      justifyContent={"space-between"}
      p={{ base: "0.6rem 0.8rem", lg: "0.8rem 2rem" }}
      gap="1rem"
      position="relative"
      shadow="md"
      transition="all 0.4s ease"
      transform={isLoading ? "translateY(0)" : "translateY(-200px)"}
    >
      <Flex
        display={{ base: "flex", xl: "none" }}
        alignItems="center"
        gap="0.4rem"
      >
        <NavMenu />
        <NavSearch />
      </Flex>

      <Flex
        flexDirection="column"
        display={{ base: "none", lg: "block" }}
        gap="1rem"
        w="100%"
      >
        <RoutePath route={pathRoute} />
        <Heading as="h3" fontSize="0.985rem">
          Dashboard
        </Heading>
      </Flex>

      <Flex
        gap={{ base: "0", lg: "0.2rem" }}
        flexDirection={{ base: "row-reverse", lg: "row" }}
        alignItems="center"
      >
        <Flex gap={{ base: "0", lg: "1.4rem" }} alignItems="center">
          <InputGroup
            w="100%"
            minW="300px"
            display={{ base: "none", lg: "block" }}
          >
            <InputLeftElement
              children={
                <Icon
                  as={BiSearchAlt2}
                  fontSize="1.4rem"
                  color="black"
                  mb="6px"
                />
              }
            />
            <Input
              shadow="md"
              focusBorderColor="primary"
              placeholder="Type here..."
              h="34px"
              p="0.8rem 0.8rem 0.8rem 2.2rem"
              type="text"
              borderRadius="20px"
            />
          </InputGroup>

          <Link
            as={NavLink}
            minW={{ base: "auto", lg: "100px" }}
            w="100%"
            borderRadius="50%"
            p={{ base: "1rem", lg: "0" }}
            _hover={{ textDecoration: "none" }}
          >
            <Flex alignItems="center" w="100%" gap={{ base: "0", lg: "1rem" }}>
              <Icon color="slategray" as={FaUser} />
              <Text
                color="slategray"
                fontWeight={600}
                display={{ base: "none", lg: "block" }}
              >
                Sign In
              </Text>
            </Flex>
          </Link>
        </Flex>
        <Widget label="Settings" icon={AiFillSetting}>
          ddsadsad
        </Widget>
        <Widget label="Notifications" icon={IoIosNotifications}>
          dsadsa
        </Widget>
      </Flex>
    </Flex>
  );
};

export default Navbar;
