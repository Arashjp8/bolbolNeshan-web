import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Button, HStack, Icon, useColorMode } from "@chakra-ui/react";

function SwitchColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing={2}>
      <Button onClick={toggleColorMode} variant={"solid"} width={"20px"} height={"35px"} borderRadius={"10px"}>
        <Icon fontSize={"xl"}>
          {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
        </Icon>
      </Button>
    </HStack>
  );
}

export default SwitchColorMode;
