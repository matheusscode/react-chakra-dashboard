import React from "react";

import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { useRef } from "react";

interface CarouselProps {
  children: React.ReactNode;
}

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: -400,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <Flex
      p="1rem"
      gap="1rem"
      maxW="600px"
      minH="300px"
      h="100%"
      alignItems="center"
      justifyContent="center"
      position="relative"
    >
      <IconButton
        aria-label="Scroll left"
        icon={<ChevronLeftIcon />}
        onClick={handleScrollLeft}
        position="absolute"
        left="-40px"
        top="43%"
        fontSize="2.6rem"
        w="50px"
        h="50px"
        zIndex={2}
        backgroundColor="transparent"
        _hover={{ backgroundColor: "none" }}
      />
      <Flex
        ref={scrollRef}
        h="100%"
        w="100%"
        gap="1rem"
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        css={{
          scrollbarWidth: "none",
        }}
        overflowX="scroll"
        overflowY="hidden"
        whiteSpace="nowrap"
      >
        {children}
      </Flex>
      <IconButton
        aria-label="Scroll right"
        icon={<ChevronRightIcon />}
        onClick={handleScrollRight}
        position="absolute"
        right="-40px"
        top="43%"
        fontSize="2.6rem"
        w="50px"
        h="50px"
        backgroundColor="transparent"
        _hover={{ backgroundColor: "none" }}
        zIndex={4}
      />
    </Flex>
  );
};

export default Carousel;
