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

const Navbar: React.FC = () => {
  const location = useLocation();

  let pathRoute;

  if (location.pathname === "/dashboard") {
    pathRoute = 'Dashboard'
  } else if (location.pathname === "/billing") {
    pathRoute = 'Billing'
  } else if (location.pathname === '/tables') {
    pathRoute = 'Tables'
  }

  return (
    <Flex
      w="100%"
      bg="transparent"
      alignItems="center"
      justifyContent="space-between"
      p="0.8rem 2rem"
      gap="1rem"
      position="relative"
      shadow="md"
    >
      <Flex flexDirection="column" gap="0.8rem" w="100%">
        <RoutePath />
        <Heading as="h3" fontSize="0.985rem">
          Dashboard
        </Heading>
      </Flex>

      <Flex gap="1.4rem" alignItems="center">
        <InputGroup w="100%" minW="300px">
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
          minW="100px"
          w="100%"
          _hover={{ textDecoration: "none" }}
        >
          <Flex alignItems="center" w="100%" gap="1rem">
            <Icon color="slategray" as={FaUser} />
            <Text color="slategray" fontWeight={600}>
              Sign In
            </Text>
          </Flex>
        </Link>
      </Flex>

      <Flex gap="0.2rem">
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
