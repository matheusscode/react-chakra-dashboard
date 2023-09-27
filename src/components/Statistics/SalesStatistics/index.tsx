import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

interface SalesStatisticsProps {
  children: React.ReactNode;
}

const SalesStatistics: React.FC<SalesStatisticsProps> = ({ children }) => {
  return (
    <Flex
      bg="white"
      shadow="md"
      p="1.2rem"
      height="100%"
      w="100%"
      flexDirection="column"
      gap="1rem"
      maxW="900px"
    >
      <Flex w="100%">
        <Box>
          <Heading as="h1" fontSize="1.15rem" fontWeight="bold" color="black">
            Sales overview
          </Heading>
          <Flex gap="0.4rem" alignItems="center">
            <Text color="green" fontWeight="medium">
              (+5) more
            </Text>
            <Text color="slategray">in 2021</Text>
          </Flex>
        </Box>
      </Flex>
      {children}
    </Flex>
  );
};

export default SalesStatistics;
