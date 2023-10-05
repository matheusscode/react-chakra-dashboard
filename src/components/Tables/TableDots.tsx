import React from "react";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { BiDotsVerticalRounded } from "react-icons/bi";

const TableDots: React.FC = () => {
  return (
    <Menu placement="bottom-end">
      <MenuButton
        p="0 0.4rem"
        h="38px"
        m="0"
        transition="all 0.2s"
        borderRadius='4px'
        shadow='md'
        _hover={{ bg: "gray.100" }}
        _expanded={{ bg: "gray.400" }}
        _focus={{ boxShadow: "outline" }}
      >
        <Icon mt="0.2rem" fontSize="1.4rem" color="slategray" as={BiDotsVerticalRounded} />
      </MenuButton>
      <MenuList>
        <MenuItem>New File</MenuItem>
        <MenuItem>New Window</MenuItem>
        <MenuDivider />
        <MenuItem>Open...</MenuItem>
        <MenuItem>Save File</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TableDots;
