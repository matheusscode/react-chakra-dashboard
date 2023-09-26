import React from "react";
import { Outlet } from "react-router-dom";
import { Flex } from "@chakra-ui/react";

const Access: React.FC = () => {
  return (
    <Flex w="100%" h="100vh">
      <Outlet />
    </Flex>
  );
};

export default Access;
