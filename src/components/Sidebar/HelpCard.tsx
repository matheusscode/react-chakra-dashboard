import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { BiSolidHelpCircle } from "react-icons/bi";

interface HelpCardProps {
  isOpen: boolean;
}

const HelpCard: React.FC<HelpCardProps> = ({ isOpen }) => {
  return (
    <Card
      bg="primary"
      shadow="lg"
      w="240px"
      p="0.4rem 0"
      transition="all 0.4s ease"
      transform={isOpen ? "translateX(0)" : "translateX(-300px)"}
    >
      <CardHeader p="0.8rem 1rem ">
        <Flex
          borderRadius="50%"
          w="38px"
          h="38px"
          bg="white"
          justifyContent="center"
          alignItems="center"
        >
          <Icon as={BiSolidHelpCircle} color="primary" fontSize="1.4rem" />
        </Flex>
      </CardHeader>
      <CardBody p="0.2rem 1rem 0.8rem">
        <Heading lineHeight="24px" as="h2" fontSize="1rem" color="white">
          Need Help?
        </Heading>
        <Text color="white">Please check your does</Text>
      </CardBody>
      <CardFooter p="0.4rem 1rem 0.8rem">
        <Button
          w="100%"
          textTransform="uppercase"
          fontSize="0.775rem"
          fontWeight="bold"
          shadow="md"
        >
          TUTORIAL
        </Button>
      </CardFooter>
    </Card>
  );
};

export default HelpCard;
