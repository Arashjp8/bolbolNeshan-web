import { MoonIcon } from "@chakra-ui/icons";
import { HStack, Icon, Switch, useColorMode } from "@chakra-ui/react";

function SwitchColorMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack spacing={2}>
      <Icon fontSize={"lg"}>{<MoonIcon />}</Icon>
      <Switch
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        colorScheme={"teal"}
        size={"lg"}
        isFocusable
      />
    </HStack>
  );
}

export default SwitchColorMode;
