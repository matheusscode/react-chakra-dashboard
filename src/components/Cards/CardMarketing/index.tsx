import {
  Card,
  CardFooter,
  CardHeader,
  Heading,
  Text,
  Link,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import img from "../../../../public/assets/marketing-photo.svg";
import { NavLink } from "react-router-dom";

const CardMarketing: React.FC = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  const handleHovered = () => {
    setIsHovered(true);
  };

  const handleUnhovered = () => {
    setIsHovered(false);
  };

  return (
    <Card
      maxW="600px"
      w="100%"
      h="300px"
      color="white"
      position="relative"
      borderRadius="12px"
      overflow="hidden"
      onMouseEnter={handleHovered}
      onMouseLeave={handleUnhovered}
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
        <Link as={NavLink} to="/">
          Read more
        </Link>
      </CardFooter>
    </Card>
  );
};

export default CardMarketing;
