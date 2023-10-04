import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import {
  AddIcon,
  EditIcon,
  ExternalLinkIcon,
  RepeatIcon,
} from "@chakra-ui/icons";
import { IconType } from "react-icons";
import { Icon } from "@chakra-ui/icons";

interface WidgetProps {
  icon: IconType;
  label: string;
}

const Widget: React.FC<WidgetProps> = ({ icon, label }) => {
  return (
    <Menu>
      <Tooltip label={label} placement="bottom">
        <MenuButton
          as={IconButton}
          aria-label="Options"
          variant="outline"
          shadow="none"
          border="none"
        >
          <Icon as={icon} fontSize="1.4rem" color="slategray" />
        </MenuButton>
      </Tooltip>
      <MenuList>
        <MenuItem icon={<AddIcon />} command="⌘T">
          New Tab
        </MenuItem>
        <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
          New Window
        </MenuItem>
        <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
          Open Closed Tab
        </MenuItem>
        <MenuItem icon={<EditIcon />} command="⌘O">
          Open File...
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default Widget;
