import React from "react";
import { Box, Flex } from "@chakra-ui/react";
import { UseLoadingProps } from "../../../types";
import CardFront from "./CardFront";
import CardBack from "./CardBack";

interface CreditCardProps extends UseLoadingProps {}

const CreditCard: React.FC<CreditCardProps> = ({ isLoading }) => {
  const [isFlipped, setIsFlipped] = React.useState(false);

  const handleCheckboxChange = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Box
      as="label"
      maxW="450px"
      w="100%"
      h="250px"
      borderRadius="10px"
      color="silver"
      textAlign="center"
      transition="all 0.4s ease"
      cursor="pointer"
      pos="relative"
      opacity={isLoading ? 1 : 0}
      transform={isLoading ? "translateX(0px)" : "translateX(-500px)"}
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
      }}
    >
      <input
        type="checkbox"
        onChange={handleCheckboxChange}
        style={{ display: "none" }}
      />
      <Flex
        w="100%"
        h="100%"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <CardFront isFlipped={isFlipped} />
        <CardBack isFlipped={isFlipped} />
      </Flex>
    </Box>
  );
};

export default CreditCard;
