import { extendTheme, ChakraTheme } from "@chakra-ui/react";
import "@fontsource/open-sans";
import "@fontsource/hanken-grotesk";
import "@fontsource/poppins";

const customTheme: Partial<ChakraTheme> = {
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
};

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
  bg: "#F8F9FA",
  primary: "#4FD1C5",
  slate_gray: "#A0AEC0",
  grayish_gray: "#CBD5E0",
  midnight_blue: "#2D3748",
  green_light: "#48BB78"
};

const fonts = {
  os: "Open Sans, sans-serif",
  hg: "'Hanken Grotesk', sans-serif",
  pp: "'Poppins', sans-serif",
};

const global = {
  global: {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
};

export const theme = extendTheme({
  customTheme,
  global,
  fonts,
  colors,
});
