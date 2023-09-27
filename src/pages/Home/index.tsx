import { Flex } from "@chakra-ui/react";
import React from "react";
import {
  BALANCE_CARDS,

} from "./data";
import CardBalance from "../../components/Cards/CardBalance";
import CardMarketing from "../../components/Cards/CardMarketing";
import CardChakraDoc from "../../components/Cards/CardChakraDoc";
import SalesStatistics from "../../components/Statistics/SalesStatistics";
import UsersStatistics from "../../components/Statistics/UsersStatistics";


const Home: React.FC = () => {
  return (
    <Flex w="100%" h="100%" padding="1rem 2rem" direction="column">
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
      >
        {BALANCE_CARDS.map((card) => (
          <CardBalance key={card.id} data={card} />
        ))}
      </Flex>
      <Flex mt="2rem" justifyContent="space-between" w="100%" gap="1rem">
        <CardChakraDoc />
        <CardMarketing />
      </Flex>

      <Flex mt="2rem" w="100%" justifyContent="space-between" gap="1rem">
        <UsersStatistics />
        <SalesStatistics>

        </SalesStatistics>
      </Flex>
    </Flex>
  );
};

export default Home;
