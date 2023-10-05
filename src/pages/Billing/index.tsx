import React from "react";
import CreditCard from "../../components/Cards/CreditCard";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import useLoading from "../../hooks/useLoading";

const Billing: React.FC = () => {
  const { isLoading } = useLoading();

  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex
      w="100%"
      h="100%"
      padding={isLargerThan700 ? "1rem" : "1rem 2rem"}
      direction="column"
    >
      BILLING
      <CreditCard isLoading={isLoading} />
    </Flex>
  );
};

export default Billing;
