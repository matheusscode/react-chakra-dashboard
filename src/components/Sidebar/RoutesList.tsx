import React from "react";
import {
  List,
  ListItem,
  Link,
  Text,
  Heading,
  Flex,
  Stack,
} from "@chakra-ui/react";
import { NavLink, useLocation } from "react-router-dom";
import { Icon } from "@chakra-ui/icons";
import {} from "@chakra-ui/icons";
import { RoutesListProps, RouteLink } from "../../types";

const RoutesList: React.FC<RoutesListProps> = ({
  routesLinks,
  title,
  isOpen,
}) => {
  const location = useLocation();

  const renderNavLink = (link: RouteLink) => {
    const isActive = location.pathname === link.href;

    const listItemStyles = isActive
      ? {
          borderRadius: "2xl",
          boxShadow: "sm",
          backgroundColor: "white",
        }
      : {};

    return (
      <ListItem
        key={link.id}
        w="100%"
        transition="all 0.4s ease"
        p={isOpen ? "0.6rem 1.6rem" : "1rem 2rem"}
        {...listItemStyles}
      >
        <Link as={NavLink} to={link.href} _hover={{ textDecoration: "none" }}>
          <Flex alignItems="center" gap="1rem">
            <Flex
              alignItems="center"
              justifyContent="center"
              w={isOpen ? "36px" : "100%"}
              h={isOpen ? "36px" : "100%"}
              shadow="md"
              borderRadius="50%"
              bg="white"
            >
              <Icon
                color={isOpen ? "primary" : isActive ? "primary" : "white"}
                as={link.icon}
                fontSize="1.4rem"
              />
            </Flex>
            <Text
              transition="all 0.4s ease"
              transform={isOpen ? "translateX(0)" : "translateX(-300px)"}
              fontSize="1rem"
              fontWeight="bold"
              color={isActive ? "black" : "slategray"}
            >
              {link.text}
            </Text>
          </Flex>
        </Link>
      </ListItem>
    );
  };

  const renderNavList = (links: RouteLink[]) => {
    return (
      <List
        display="flex"
        gap="0.4rem"
        flexDirection="column"
        justifyContent={isOpen ? "inherit" : "center"}
        alignItems={isOpen ? "inherit" : "center"}
      >
        {links.map((link: RouteLink) => (
          <React.Fragment key={link.id}>{renderNavLink(link)}</React.Fragment>
        ))}
      </List>
    );
  };

  return (
    <Stack>
      {title && <Heading>{title}</Heading>}
      {renderNavList(routesLinks)}
    </Stack>
  );
};

export default RoutesList;
