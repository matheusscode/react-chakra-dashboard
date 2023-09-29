import React from "react";
import { Box, Flex, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Chart from "react-apexcharts";

interface SalesStatisticsProps {}

const SalesStatistics: React.FC<SalesStatisticsProps> = () => {
  const [isLargerThan700] = useMediaQuery("(max-width: 700px)");

  const chartData = {
    options: {
      chart: {
        id: "basic-bar",
      },
      yaxis: {
        labels: {
          style: {
            fontSize: "12px",
            colors: ["#cacaca"],
          },
        },
        grid: {
          show: false,
        },
        tickAmount: 5,
        max: 500,
      },
      xaxis: {
        axisTicks: {
          show: false,
        },
        labels: {
          style: {
            fontSize: "12px",
            colors: ["#cacaca"],
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
    colors: ["rgba(79, 209, 197, 0)", "rgba(79, 209, 197, 0.54)", "#2D3748"],
    series: [
      {
        name: "Series 1",
        data: [500, 200, 300, 450, 350, 500, 200, 300, 150],
      },
      {
        name: "Series 2",
        data: [200, 300, 200, 380, 500, 300, 350, 200, 350],
      },
    ],
  };

  return (
    <Flex
      justifyContent="space-between"
      alignItems="center"
      flexDirection="column"
      w="100%"
      shadow="md"
      bg="white"
      p={isLargerThan700 ? "0 0.8rem 0 0" : "1.2rem"}
      gap="1rem"
      height={isLargerThan700 ? "auto" : "460px"}
      borderRadius="12px"
    >
      <Flex w="100%" p={isLargerThan700 ? "1rem 1rem 0" : "0"}>
        <Box>
          <Heading
            as="h1"
            fontSize="1.255rem"
            color="midnightblue"
            fontWeight="bold"
          >
            Sales overview
          </Heading>
          <Flex gap="0.4rem" alignItems="center">
            <Text color="green" fontWeight="medium">
              (+5) more
            </Text>
            <Text color="slategray">in 2021</Text>
          </Flex>
        </Box>
      </Flex>
      <Box m="0 auto" maxW={"1200px"} w="100%">
        <Chart
          options={chartData.options}
          series={chartData.series}
          type="area"
          width="100%"
          height={isLargerThan700 ? "250px" : "360px"}
        />
      </Box>
    </Flex>
  );
};

export default SalesStatistics;
