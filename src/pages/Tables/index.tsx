import {
  Box,
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import Projects from "../../components/Tables/Projects";
import Authors from "../../components/Tables/Authors";
import { BiSearchAlt2 } from "react-icons/bi";
import { Icon } from "@chakra-ui/icons";

// import { Container } from './styles';

const Tables: React.FC = () => {
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex
      w="100%"
      h="100%"
      gap="2rem"
      padding={isLargerThan700 ? "1rem" : "1rem 2rem"}
      direction="column"
    >
      <Flex direction={"column"} w="100%" p="1rem" bg="white" shadow="md" borderRadius="10px">
        <Box>
          <Heading color="midnightblue" as="h1" fontSize="1.8rem">
            Tables
          </Heading>
        </Box>
        <Flex
          mt="1rem"
          direction={{ base: "column", xl: "row" }}
          justifyContent="space-between"
          w="100%"
          gap="1rem"
        >
          <InputGroup w="100%">
            <InputLeftElement
              children={
                <Icon
                  as={BiSearchAlt2}
                  fontSize="1.4rem"
                  mt="0.6rem"
                  ml="0.6rem"
                  color="black"
                />
              }
            />
            <Input
              shadow="md"
              focusBorderColor="slategray"
              placeholder="Search tables..."
              type="text"
              p="1.5rem 2.6rem"
              borderRadius="10px"
            />
          </InputGroup>
          <Button
            variant="ghost"
            w={{ lg: "100%", xl: "300px" }}
            p="1.4rem"
            bg="primary"
            shadow="md"
            color="White"
            border="2px solid transparent"
            _hover={{ bg: "white", color: "primary", borderColor: "primary" }}
          >
            Add Table
          </Button>
        </Flex>
      </Flex>
      <Authors />
      <Projects />
    </Flex>
  );
};

export default Tables;
