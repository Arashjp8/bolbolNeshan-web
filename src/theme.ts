import { extendTheme } from "@chakra-ui/react";
import "@fontsource/vazirmatn";

const config = {
  initialColorMode: "dark",
};

const theme = extendTheme({
  fonts: {
    body: "vazirmatn",
    heading: "vazirmatn",
  },
  colors: {
    customBlue: {
      500: "#3182ce",
    },
  },
  config,
});

export default theme;
