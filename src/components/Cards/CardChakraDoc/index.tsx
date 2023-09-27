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
} from "@chakra-ui/react";
import React from "react";
import img from "../../../../public/assets/chakra-doc.svg";
import { NavLink } from "react-router-dom";

const CardChakraDoc: React.FC = () => {
  return (
    <Card
      w="100%"
      color="white"
      position="relative"
      borderRadius="12px"
      display="flex"
      flexDirection="column"
      h="100%"
      minW="500px"
    >
      <Flex justifyContent="space-between" h="100%" w="100%">
        <Flex flexDirection="column" h="100%">
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
            <Heading fontSize="1.09rem" as="h1" color="gray.500">
              Built by developers
            </Heading>
            <Heading fontSize="1.52rem" as="h2" color="midnightblue">
              Purity UI Dashboard
            </Heading>
            <Text fontSize="1.02rem" color="slategray">
              From colors, cards, typography to complex elements, you will find{" "}
              the full documentation.
            </Text>
          </CardHeader>

          <CardFooter>
            <Link color="slategray" as={NavLink} to="/">
              Read more
            </Link>
          </CardFooter>
        </Flex>
        <CardBody
          display="flex"
          alignItems="center"
          w="100%"
          h="100%"
          overflow="hidden"
        >
          <Image
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
