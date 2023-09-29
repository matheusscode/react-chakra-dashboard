import {
  Card,
  CardHeader,
  CardFooter,
  CardBody,
  Text,
  Heading,
  Flex,
  Link,
  Image,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import React from "react";
import img from "../../../../public/assets/chakra-doc.svg";
import { NavLink } from "react-router-dom";

const CardChakraDoc: React.FC = () => {
  const [expandedColor, setExpandedColor] = React.useState<boolean>(false);
  const [isLargerThan1700] = useMediaQuery("(max-width: 1700px)");
  const [isLargerThan800] = useMediaQuery("(max-width: 800px)");
  const [isLargerThan500] = useMediaQuery("(max-width: 500px)");

  const toggleExpandedColor = () => {
    setExpandedColor(!expandedColor);
  };

  return (
    <Card
      w="100%"
      color="white"
      position="relative"
      borderRadius="12px"
      display="flex"
      flexDirection="column"
      h={isLargerThan1700 ? "auto" : "100%"}
      minW={isLargerThan1700 ? "100%" : "500px"}
      overflow="hidden"
    >
      <Box
        display={isLargerThan500 ? "block" : "none"}
        onClick={toggleExpandedColor}
        position="absolute"
        p="1rem"
        bgColor="primary"
        borderTopLeftRadius="100%"
        borderBottomRightRadius="12px"
        w={expandedColor ? "150%" : "150px"}
        h={expandedColor ? "150%" : "150px"}
        right="0"
        bottom="0"
        transition="all 0.4s ease"
      />
      <Flex justifyContent="space-between" h="100%" w="100%">
        <Flex flexDirection="column" h="100%" zIndex={1}>
          <CardHeader
            w="100%"
            display="flex"
            flexDirection="column"
            gap="0.4rem"
            h="100%"
            maxW="600px"
            wordBreak="break-word"
            flexWrap="wrap"
          >
            <Heading
              fontSize="1.09rem"
              as="h1"
              color={expandedColor === true ? "white" : "gray.500"}
            >
              Built by developers
            </Heading>
            <Heading fontSize="1.52rem" as="h2" color="midnightblue">
              Purity UI Dashboard
            </Heading>
            <Text
              fontSize="1.02rem"
              color={expandedColor === true ? "white" : "slategray"}
            >
              From colors, cards, typography to complex elements, <br /> you
              will find the full documentation.
            </Text>
          </CardHeader>

          <CardFooter>
            <Link
              as={NavLink}
              to="/"
              color={expandedColor === true ? "white" : "slategray"}
              _hover={{ textDecoration: "underline" }}
            >
              Read more
            </Link>
          </CardFooter>
        </Flex>
        <CardBody
          display="flex"
          alignItems="center"
          w={isLargerThan1700 ? "300px" : "100%"}
          h={isLargerThan1700 ? "300px" : "100%"}
          overflow="hidden"
        >
          <Image
            display={isLargerThan800 ? "none" : "block"}
            src={img}
            borderRadius="8px"
            alt="Chakra UI logo brand."
            ml="auto"
            objectFit="cover"
            height="100%"
          />
        </CardBody>
      </Flex>
    </Card>
  );
};

export default CardChakraDoc;
