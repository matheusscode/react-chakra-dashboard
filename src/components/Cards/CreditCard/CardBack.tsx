import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface CardBackProps {
  isFlipped: boolean;
}

const CardBack: React.FC<CardBackProps> = ({ isFlipped }) => {
  return (
    <Flex
      direction="column"
      justify="center"
      w="100%"
      h="100%"
      bg="blue"
      transition="transform 0.4s ease"
      transform={isFlipped ? "rotateY(0deg)" : "rotateY(180deg)"}
      opacity={isFlipped ? 1 : 0}
      borderRadius="10px"
      position="absolute"
      p="1rem"
      top="0"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    >
      <Box w="100%" h="100%" position="relative">
        Back
      </Box>
    </Flex>
  );
};

export default CardBack;
