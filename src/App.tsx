import { Button, useColorMode } from "@chakra-ui/react";
import "./App.css";

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <>
      <Button onClick={toggleColorMode}>
        Toggle {colorMode === "light" ? "Dark" : "Light"}
      </Button>
      <div>سلام بچ</div>
    </>
  );
}

export default App;
