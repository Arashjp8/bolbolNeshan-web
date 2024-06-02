import { HStack, Link } from "@chakra-ui/react";
import SwitchColorMode from "./SwitchColorMode";

function Navbar() {
  return (
    <HStack paddingX={4} paddingY={2} justifyContent={"space-between"}>
      <SwitchColorMode />
      <Link href={"#"} fontSize={"2xl"} fontWeight={"bold"}>
        بلبل نشان
      </Link>
    </HStack>
  );
}

export default Navbar;
