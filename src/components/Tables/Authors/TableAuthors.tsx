import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { tableData } from "./data";
import { NavLink } from "react-router-dom";

const TableAuthors: React.FC = () => {
  return (
    <TableContainer w="100%" borderRadius="12px" bg="white">
      <Table variant="simple">
        <TableCaption textAlign="left">
          <Flex alignItems="center" color="slategray">
            @ 2021, Made with ❤️ by
            <Text color="primary" mx="0.4rem">
              @matheusscode
            </Text>
            for a better web
          </Flex>
        </TableCaption>
        {tableData.map((table) => (
          <React.Fragment key={table.id}>
            <Thead>
              <Tr>
                {table.columns.map((column) => (
                  <Th color="gray.400" textAlign="left" key={column}>
                    {column}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {table.datas.map((data) => (
                <Tr key={data.id}>
                  <Td
                    p="0.8rem 1.1rem"
                    display="flex"
                    gap="1rem"
                    textAlign="left"
                    minW="250px"
                  >
                    <Flex gap="1rem" alignItems="center">
                      <Image
                        src={data.member.avatar}
                        alt={data.member.name}
                        borderRadius="10px"
                        shadow="md"
                        w="40px"
                        h="40px"
                      />
                      <Box>
                        <Heading as="h3" fontSize="0.925rem">
                          {data.member.name}
                        </Heading>
                        <Link
                          color="slategray"
                          fontSize="0.9rem"
                          as={NavLink}
                          to={`https://github.com/${data.member.github}`}
                          _hover={{ color: "primary" }}
                        >
                          @{data.member.github}
                        </Link>
                      </Box>
                    </Flex>
                  </Td>
                  <Td>
                    <Box>
                      <Text
                        fontSize="0.975rem"
                        fontWeight="medium"
                        color="black"
                      >
                        {data.member.function.function}
                      </Text>
                      <Text fontSize="0.875rem">
                        {data.member.function.area}
                      </Text>
                    </Box>
                  </Td>
                  <Td>
                    <Box
                      bg={
                        data.member.status === "Online"
                          ? "green_light"
                          : "grayish_gray"
                      }
                      shadow="md"
                      color="white"
                      textAlign="center"
                      maxW="80px"
                      p="0.4rem"
                      borderRadius="10px"
                    >
                      {data.member.status}
                    </Box>
                  </Td>
                  <Td>
                    <Text color="black" fontWeight="medium">
                      {data.member.date}
                    </Text>
                  </Td>
                  <Td w="200px">
                    <Button variant="ghost" color="slategray">
                      Excluir
                    </Button>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </React.Fragment>
        ))}
      </Table>
    </TableContainer>
  );
};

export default TableAuthors;
