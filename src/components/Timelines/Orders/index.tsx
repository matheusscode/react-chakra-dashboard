import { Flex, Heading, Icon, Stack, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import OrderSteps from "./Step";


const Orders: React.FC = () => {
  const [isLargerThan1700] = useMediaQuery("(max-width: 1700px)");

  return (
    <Flex
      flexDirection="column"
      w="100%"
      bg="white"
      p="1.2rem 1.4rem"
      shadow="md"
      borderRadius="12px"
      maxW={isLargerThan1700 ? "100%" : "600px"}
    >
      <Flex w="100%" justifyContent="space-between" mb="2rem">
        <Stack spacing="0.4rem" flexDirection="column">
          <Heading
            as="h1"
            fontSize="1.255rem"
            color="midnightblue"
            fontWeight="bold"
          >
            Projects
          </Heading>
          <Flex alignItems="center" gap="0.4rem">
            <Icon
              color="green.400"
              fontSize="1.1rem"
              as={BsFillCheckCircleFill}
            />
            <Text
              display="flex"
              gap="0.4rem"
              fontWeight="medium"
              fontSize="0.876rem"
            >
              <Text color="gray.600" fontWeight="bold">
                30 done
              </Text>
              this month
            </Text>
          </Flex>
        </Stack>
      </Flex>
      <OrderSteps />
    </Flex>
  );
};

export default Orders;
