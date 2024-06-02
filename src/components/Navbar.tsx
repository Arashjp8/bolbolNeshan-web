import { Button, HStack, Icon, Image, useColorMode } from "@chakra-ui/react";
import Logo from "../assets/bolbol.svg";
import NavigationOptions from "./NavigationOptions";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack
      paddingX={4}
      paddingY={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      minWidth={"400px"}
    >
      <Button
        onClick={toggleColorMode}
        variant={"solid"}
        width={"20px"}
        height={"35px"}
        borderRadius={"10px"}
      >
        <Icon fontSize={"xl"}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Icon>
      </Button>

      <NavigationOptions />
      <Image src={Logo} alt="Logo" width={"50px"} height={"50px"} />
    </HStack>
  );
}

export default Navbar;
