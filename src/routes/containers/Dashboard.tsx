import React from "react";
import { Outlet } from "react-router-dom";
import { Box, Flex, Stack } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Dashboard: React.FC = () => {
  return (
    <Flex w="100%" h="100vh" bg="bg" overflow="hidden">
      <Sidebar />
      <Stack w="100%" h="100%" bg="transparent">
        <Navbar />
        <Box
          w="100%"
          h="100vh"
          bg="transparent"
          m="0 0 2rem"
          overflowY="scroll"
          overflowX="hidden"
        >
          <Outlet />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Dashboard;
