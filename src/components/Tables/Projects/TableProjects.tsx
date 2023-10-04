import React from "react";

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Image,
  Text,
  AvatarGroup,
  Avatar,
  Progress,
  Flex,
  Tooltip,
  useMediaQuery,
} from "@chakra-ui/react";
import { tableData } from "./data";
import { currencyFormatter } from "../../../utils/currencyFormatter";



const TableProjects: React.FC = () => {
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <TableContainer
      w="100%"
      borderRadius="12px"
      bg="white"

    >
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
                  <Th
                    p="0.8rem 0"
                    color="gray.400"
                    textAlign="left"
                    key={column}
                  >
                    {column}
                  </Th>
                ))}
              </Tr>
            </Thead>
            <Tbody>
              {table.datas.map((data) => (
                <Tr key={data.id}>
                  <Td
                    minW={isLargerThan700 ? "350px" : "inherit"}
                    p="0.8rem 0"
                    maxW="200px"
                    display="flex"
                    gap="1rem"
                  >
                    <Image
                      src={data.company.brand}
                      alt={data.company.brand_description}
                    />
                    <Text
                      fontWeight="bold"
                      fontSize="0.895rem"
                      color="midnightblue"
                    >
                      {data.company.company_name}
                    </Text>
                  </Td>
                  <Td minW={isLargerThan700 ? "200px" : "inherit"} p="0.8rem 0">
                    <Flex>
                      {data.members.map((member) => (
                        <AvatarGroup max={5} size="sm" key={member.id}>
                          <Avatar
                            m="-8px"
                            src={member.avatar}
                            name={member.name}
                          />
                        </AvatarGroup>
                      ))}
                    </Flex>
                  </Td>
                  <Td
                    minW={isLargerThan700 ? "200px" : "inherit"}
                    p="0.8rem 0"
                    isNumeric
                  >
                    <Text
                      textAlign="left"
                      color="midnightblue"
                      fontWeight="bold"
                      fontSize="0.875rem"
                    >
                      {data.budget === 0
                        ? "Not set"
                        : currencyFormatter(data.budget)}
                    </Text>
                  </Td>
                  <Td
                    minW={isLargerThan700 ? "200px" : "inherit"}
                    p="0.8rem 0"
                    isNumeric
                  >
                    <Flex flexDirection="column" gap="0.4rem">
                      <Text
                        textAlign="left"
                        color="primary"
                        fontWeight="medium"
                        fontSize="0.975rem"
                      >{`${data.completion}%`}</Text>
                      <Tooltip
                        placement="top"
                        borderRadius="10px"
                        label={`Progress: ${data.completion}% completed`}
                      >
                        <Progress
                          colorScheme="teal"
                          height="6px"
                          borderRadius="14px"
                          value={data.completion}
                        />
                      </Tooltip>
                    </Flex>
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

export default TableProjects;
