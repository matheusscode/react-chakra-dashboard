import React from "react";
import { Box, Flex, Progress, Text, Tooltip, useMediaQuery } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/icons";

interface DataProps {
  id: number;
  title: string;
  value: string;
  icon: IconType;
}

interface CardUsersStatisticsProps {
  card: DataProps;
}

const CardUsersStatistics: React.FC<CardUsersStatisticsProps> = ({ card }) => {

  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");
  
  return (
    <Box maxW="150px" w="100%" >
      <Flex gap="0.4rem" alignItems="center">
        <Tooltip label={card.title} placement="top">
          <Flex
            justifyContent="center"
            alignItems="center"
            w={isLargerThan700 ? "26px" : "40px"}
            h={isLargerThan700 ? "26px" : "40px"}
            bg="primary"
            borderRadius="50%"
          >
            <Icon fontSize={isLargerThan700 ? "0.9rem" : "1.2rem"} color="white" as={card.icon} />
          </Flex>
        </Tooltip>
        <Text fontSize="0.8rem" fontWeight="bold" color="slategray">
          {card.title}
        </Text>
      </Flex>
      <Flex flexDirection="column" gap="0.4rem">
        <Text fontSize={isLargerThan700 ? "0.9rem" : "1.2rem"} fontWeight="bold">
          {card.value}
        </Text>
        <Progress value={30} borderRadius="20px" h="10px" colorScheme='teal' />
      </Flex>
    </Box>
  );
};

export default CardUsersStatistics;
