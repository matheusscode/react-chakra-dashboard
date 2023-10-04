import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Link,
  Image,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import img from "../../../../public/assets/marketing-photo.svg";
import { NavLink } from "react-router-dom";
import { UseLoadingProps } from "../../../types";

interface CardMarketingProps extends UseLoadingProps {}

const CardMarketing: React.FC<CardMarketingProps> = ({ isLoading }) => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const [isLargerThan1700] = useMediaQuery("(max-width: 1700px)");
  const [isLargerThan1300] = useMediaQuery("(max-width: 1300px)");

  const handleHovered = () => {
    setIsHovered(true);
  };

  const handleUnhovered = () => {
    setIsHovered(false);
  };

  return (
    <Card
      maxW={isLargerThan1700 ? "100%" : "600px"}
      w="100%"
      h={isLargerThan1300 ? "200px" : isLargerThan1700 ? "300px" : "300px"}
      color="white"
      position="relative"
      borderRadius="12px"
      overflow="hidden"
      onMouseEnter={handleHovered}
      onMouseLeave={handleUnhovered}
      opacity={isLoading ? "1" : "0"}
      transform={isLoading ? "translateX(0)" : "translateX(-2000px)"}
      transition="all 0.4s ease"
    >
      <Image
        src={img}
        borderRadius="12px"
        alt="3 peoples speaking"
        h="100%"
        w="100%"
        top="0"
        left="0"
        zIndex={1}
        objectFit="cover"
        position="absolute"
        transition="all 0.4s ease"
        transform={isHovered ? "scale(1.2)" : "scale(1)"}
      />

      <Box
        position="absolute"
        h="100%"
        w="100%"
        top="0"
        left="0"
        bgImage="linear-gradient(160deg, #151928, #31386076)"
        zIndex={2}
      />

      <CardHeader
        zIndex={2}
        h="100%"
        display="flex"
        flexDirection="column"
        gap="0.4rem"
      >
        <Heading fontSize="1.175rem">Work with the Rockets</Heading>
        <Text>
          Wealth creation is an evolutionarily recent positive-sum game. It is
          all about who take the opportunity first.
        </Text>
      </CardHeader>
      <CardFooter zIndex={2}>
        <Link as={NavLink} to="/" _hover={{ textDecoration: "underline" }}>
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardMarketing;
