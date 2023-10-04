import React from "react";
import { Button, Stack, Tooltip } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { IconType } from "react-icons";

interface WidgetProps {
  icon: IconType;
  label: string;
  children: React.ReactNode;
}

const Widget: React.FC<WidgetProps> = ({ icon, label, children }) => {
  const [isOpen, setIsOpen] = React.useState<boolean>(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Tooltip label={label} borderRadius="20px" bg="primary">
        <Button onClick={handleOpen} p="0.4rem 0.8rem" bg="transparent">
          <Icon fontSize="1.4rem" color="slategray" as={icon} />
        </Button>
      </Tooltip>
      <Stack
        opacity={isOpen ? 1 : 0}
        position="absolute"
        minW="250px"
        right={4}
        top={20}
        height="200px"
        bg="white"
        shadow="lg"
        borderRadius="10px"
        transition="all 0.4s ease"
        color="slategray"
        zIndex={isOpen ? 99 : -1}
        transform={isOpen ? "translateY(0px)" : "translateY(20px)"}
      >
        {children}
      </Stack>
    </>
  );
};

export default Widget;
