import { Box, Flex } from "@chakra-ui/react";
import React from "react";

interface CardFrontProps {
  isFlipped: boolean;
}

const CardFront: React.FC<CardFrontProps> = ({ isFlipped }) => {
  return (
    <Flex
      position="absolute"
      w="100%"
      h="100%"
      bg="red"
      direction="column"
      justify="center"
      transition="transform 0.4s ease"
      transform={isFlipped ? "rotateY(180deg)" : "rotateY(0deg)"}
      opacity={isFlipped ? 0 : 1}
      borderRadius="10px"
      p="1rem"
      top="0"
      boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px"
    >
      <Box w="100%" h="100%" position="relative">
        Front
      </Box>
    </Flex>
  );
};

export default CardFront;
