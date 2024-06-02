import { HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  const textColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
  const bgColor = useColorModeValue("gray.200", "gray.900");
  return (
    <HStack
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      h={"100px"}
      bg={bgColor}
    >
      <Text color={textColor}>
        Copyright © 2024 <Link href={"#"}>Bolbol Neshan Corp.</Link> All rights
        reserved.
      </Text>
    </HStack>
  );
}

export default Footer;
