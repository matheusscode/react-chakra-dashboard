import { Icon } from "@chakra-ui/icons";
import { Box, Flex, Progress, Text } from "@chakra-ui/react";
import React from "react";

const MinCards: React.FC = () => {
  return (
    <Box>
      <Flex>
        <Box>
          <Icon />
        </Box>
        <Text></Text>
      </Flex>
      <Text></Text>
      <Progress value={30} />
    </Box>
  );
};

export default MinCards;
