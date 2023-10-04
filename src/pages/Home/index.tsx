import React from "react";
import { BALANCE_CARDS } from "./data";
import { Flex, useMediaQuery } from "@chakra-ui/react";
import CardBalance from "../../components/Cards/CardBalance";
import CardMarketing from "../../components/Cards/CardMarketing";
import CardChakraDoc from "../../components/Cards/CardChakraDoc";
import SalesStatistics from "../../components/Statistics/SalesStatistics";
import UsersStatistics from "../../components/Statistics/UsersStatistics";
import Projects from "../../components/Tables/Projects";
import Orders from "../../components/Timelines/Orders";
import Carousel from "../../components/Carousel";
import useLoading from "../../hooks/useLoading";

const Home: React.FC = () => {
  const { isLoading } = useLoading();

  const [isLargerThan1700] = useMediaQuery("(max-width: 1700px)");
  const [isLargerThan1400] = useMediaQuery("(max-width: 1400px)");
  const [isLargerThan1300] = useMediaQuery("(max-width: 1300px)");
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  return (
    <Flex
      w="100%"
      h="100%"
      padding={isLargerThan700 ? "1rem" : "1rem 2rem"}
      direction="column"
    >
      <Flex
        w="100%"
        justifyContent="space-between"
        alignItems="center"
        gap="1rem"
      >
        {isLargerThan1300 ? (
          <>
            <Carousel>
              {BALANCE_CARDS.map((card) => (
                <CardBalance key={card.id} data={card} isLoading={isLoading} />
              ))}
            </Carousel>
          </>
        ) : (
          <>
            {BALANCE_CARDS.map((card) => (
              <CardBalance key={card.id} data={card} isLoading={isLoading} />
            ))}
          </>
        )}
      </Flex>
      <Flex
        flexDirection={isLargerThan1700 ? "column" : "row"}
        mt="2rem"
        justifyContent="space-between"
        w="100%"
        gap="1rem"
      >
        <CardChakraDoc isLoading={isLoading} />
        <CardMarketing isLoading={isLoading} />
      </Flex>

      <Flex
        flexDirection={isLargerThan1300 ? "column" : "row"}
        mt="2rem"
        w="100%"
        justifyContent="space-between"
        gap="1rem"
      >
        <UsersStatistics isLoading={isLoading} />
        <SalesStatistics isLoading={isLoading} />
      </Flex>

      <Flex
        flexDirection={isLargerThan1400 ? "column" : "row"}
        mt="2rem"
        w="100%"
        justifyContent="space-between"
        gap="1rem"
      >
        <Projects />
        <Orders />
      </Flex>
    </Flex>
  );
};

export default Home;
