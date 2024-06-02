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
  config,
});

export default theme;
