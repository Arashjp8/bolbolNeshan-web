import { HStack, Link } from "@chakra-ui/react";

function NavigationOptions() {
  return (
    <HStack spacing={8} display={{ base: "none", md: "flex" }}>
      <Link href={"#"} fontSize={"lg"}>
        بلبل مارکت
      </Link>
      <Link href={"#"} fontSize={"lg"}>
        مدیریت دانش
      </Link>
    </HStack>
  );
}

export default NavigationOptions;
