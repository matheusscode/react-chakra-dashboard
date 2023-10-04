import React from "react";
import { Flex, Heading, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { IconType } from "react-icons";
import { UseLoadingProps } from "../../../types";

interface CardData {
  title?: string;
  value?: string;
  percentage?: string;
  icon: IconType;
}

interface CardBalanceProps extends UseLoadingProps {
  data: CardData;
}

const CardBalance: React.FC<CardBalanceProps> = ({ data, isLoading }) => {
  const { icon, percentage, title, value } = data;

  const [isLargerThan1700] = useMediaQuery("(max-width: 1700px)");
  const [isLargerThan1300] = useMediaQuery("(max-width: 1300px)");

  return (
    <Flex
      justifyContent="space-between"
      maxW={isLargerThan1700 ? "inherit" : "400px"}
      minW={isLargerThan1300 ? "300px" : "inherit"}
      w="100%"
      p="0.5rem 1rem"
      bg="white"
      h="80px"
      alignItems="center"
      shadow="md"
      borderRadius="10px"
      transform={isLoading ? "translateY(0px)" : "translateY(-200px)"}
      opacity={isLoading ? "1" : "0"}
      transition="all 0.4s ease"
    >
      <Flex alignItems="left" direction="column" gap="0.2rem">
        <Heading as="h4" fontSize="0.9rem" color="slate_gray">
          {title}
        </Heading>
        <Flex gap="0.4rem">
          <Text fontWeight="bold">{value}</Text>
          <Text color="green" fontWeight="medium">
            {percentage}
          </Text>
        </Flex>
      </Flex>
      <Tooltip label={title} placement="top">
        <Flex
          w="40px"
          h="40px"
          bg="primary"
          borderRadius="16px"
          justifyContent="center"
          alignItems="center"
        >
          <Icon color="white" fontSize="1.4rem" as={icon} />
        </Flex>
      </Tooltip>
    </Flex>
  );
};

export default CardBalance;
