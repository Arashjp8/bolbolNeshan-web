import "./App.css";
import Navbar from "./components/Navbar";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { VStack } from "@chakra-ui/react";

function App() {
  return (
    <VStack height={"100vh"} width={"100vw"}>
      <Navbar />
      <Body />
      <Footer />
    </VStack>
  );
}

export default App;
