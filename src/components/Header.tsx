import { Button, HStack, useColorMode } from "@chakra-ui/react";

function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <div>header</div>
    </HStack>
  );
}

export default Header;
