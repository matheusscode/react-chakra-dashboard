import React from "react";
import { Flex, Heading, Stack, Text, Tooltip } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { IconType } from "react-icons";

interface CardData {
  title?: string;
  value?: string;
  percentage?: string;
  icon: IconType;
}

interface CardBalanceProps {
  data: CardData;
}

const CardBalance: React.FC<CardBalanceProps> = ({ data }) => {
  const { icon, percentage, title, value } = data;

  return (
    <Flex
      justifyContent="space-between"
      maxW="400px"
      w="100%"
      p="0.5rem 1rem"
      bg="white"
      h="80px"
      alignItems="center"
      shadow="md"
      borderRadius="10px"
    >
      <Flex alignItems="left" direction="column" gap="0.2rem">
        <Heading  as="h4" fontSize="0.9rem" color="slate_gray">
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
