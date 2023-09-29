import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";
import { ACTIVE_USERS_CARDS, ActiveUsersCardProps } from "./data";
import CardUsersStatistics from "../../Cards/CardUsersStatistics";

const UsersStatistics: React.FC = () => {
  const [isLargerThan1700] = useMediaQuery("(max-width: 1700px)");
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  const [chartData, setChartData] = React.useState({
    options: {
      chart: {
        id: "basic-bar",
        background: "linear-gradient(-160deg, #151928, #313860)",
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
            colors: ["white"],
          },
        },
        grid: {
          show: false,
        },
        tickAmount: 5,
        max: 500,
      },
      xaxis: {
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
            colors: ["white"],
          },
        },
      },
      grid: {
        show: false,
      },
      plotOptions: {
        bar: {
          columnWidth: "16%",
          borderRadius: 10,
        },
      },
      stroke: {
        width: 0,
      },
      dataLabels: {
        enabled: false,
      },
    },
    series: [
      {
        name: "series-1",
        data: [350, 250, 100, 300, 470, 400, 340, 400],
        color: "#ffffff",
      },
    ],
  });

  return (
    <Flex
      w="100%"
      flexDirection="column"
      shadow="md"
      bg="white"
      p="1.2rem"
      height={isLargerThan700 ? "auto" : "460px"}
      borderRadius="12px"
      maxW={isLargerThan1700 ? "100%" : "800px"}
    >
      <Flex w="100%">
        <Box m="0 auto" w="100%">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="100%"
            height="240px"
          />
        </Box>
      </Flex>
      <Flex flexDirection="column" w="100%">
        <Box>
          <Heading
            as="h1"
            fontSize="1.255rem"
            color="midnightblue"
            fontWeight="bold"
          >
            Active Users
          </Heading>
          <Flex gap="0.4rem">
            <Text>(+23)</Text>
            <Text>than last week</Text>
          </Flex>
        </Box>
        <Flex justifyContent="space-between" p="1rem 0">
          {isLargerThan700 ? (
            <Flex maxW="300px" justifyContent="space-between" w="100%">
              <Flex flexDirection="column" gap="2rem">
                {ACTIVE_USERS_CARDS.slice(0, 2).map(
                  (card: ActiveUsersCardProps) => (
                    <CardUsersStatistics key={card.id} card={card} />
                  )
                )}
              </Flex>
              <Flex flexDirection="column" gap="2rem">
                {ACTIVE_USERS_CARDS.slice(2, 4).map(
                  (card: ActiveUsersCardProps) => (
                    <CardUsersStatistics key={card.id} card={card} />
                  )
                )}
              </Flex>
            </Flex>
          ) : (
            <>
              {ACTIVE_USERS_CARDS.map((card: ActiveUsersCardProps) => (
                <CardUsersStatistics key={card.id} card={card} />
              ))}
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UsersStatistics;
