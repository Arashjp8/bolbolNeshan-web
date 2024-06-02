import { HStack, Image } from "@chakra-ui/react";
import SwitchColorMode from "./SwitchColorMode";
import Logo from "../assets/MiniLogo-Blue.svg";

function Navbar() {
  return (
    <HStack
      paddingX={4}
      paddingY={2}
      justifyContent={"space-between"}
      alignItems={"center"}
      width={"100%"}
      minWidth={"400px"}
    >
      <SwitchColorMode />
      <Image src={Logo} alt="Logo" width={"50px"} height={"50px"} />
    </HStack>
  );
}

export default Navbar;
