import React from "react";
import { Flex, Text, Heading, Stack } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import TableDots from "../TableDots";
import TableProjects from "./TableProjects";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Projects: React.FC = () => {
  return (
    <Flex
      flexDirection="column"
      w="100%"
      bg="white"
      p="1.2rem 1.4rem"
      shadow="md"
      borderRadius="12px"
    >
      <Flex w="100%" justifyContent="space-between" mb="0.8rem">
        <Stack spacing="0.4rem" flexDirection="column">
          <Heading as="h1" fontSize="1.255rem" color="midnightblue" fontWeight="bold">
            Projects
          </Heading>
          <Flex alignItems="center" gap="0.4rem">
            <Icon color="green.400" fontSize="1.1rem" as={BsFillCheckCircleFill} />
            <Text display="flex" gap="0.4rem" fontWeight="medium" fontSize="0.876rem">
              <Text color="gray.600" fontWeight="bold">30 done</Text> this month
            </Text>
          </Flex>
        </Stack>
        <TableDots />
      </Flex>
      <TableProjects />
    </Flex>
  );
};

export default Projects;
