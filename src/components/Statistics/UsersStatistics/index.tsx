import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";
import Chart from "react-apexcharts";
import { ACTIVE_USERS_CARDS, ActiveUsersCardProps } from "./data";
import CardUsersStatistics from "../../Cards/CardUsersStatistics";

const UsersStatistics: React.FC = () => {
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
      height="460px"
      borderRadius="12px"
    >
      <Flex w="100%">
        <Box m="0 auto" maxW="800px" w="100%">
          <Chart
            options={chartData.options}
            series={chartData.series}
            type="bar"
            width="800px"
            height="240px"
          />
        </Box>
      </Flex>
      <Flex flexDirection="column" p="0 1rem">
        <Box>
          <Heading as="h1" fontSize="1.1rem">
            Active Users
          </Heading>
          <Flex gap="0.4rem">
            <Text>(+23)</Text>
            <Text>than last week</Text>
          </Flex>
        </Box>
        <Flex justifyContent="space-between" p="1rem 0">
          {ACTIVE_USERS_CARDS.map((card: ActiveUsersCardProps) => (
            <CardUsersStatistics key={card.id} card={card} />
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default UsersStatistics;
