import { HStack, Link, Text, useColorModeValue } from "@chakra-ui/react";

function Footer() {
  const textColor = useColorModeValue("blackAlpha.700", "whiteAlpha.700");
  const bgColor = useColorModeValue("gray.200", "gray.900");
  return (
    <HStack
      justifyContent={"center"}
      alignItems={"center"}
      w={"100%"}
      minWidth={"400px"}
      h={"100px"}
      bg={bgColor}
      paddingX={4}
      paddingY={2}
    >
      <Text color={textColor} fontSize={"sm"} marginX={{ md: 2 }}>
        Copyright © 2024 <Link href={"#"}>Bolbol Neshan Corp.</Link> All rights
        reserved.
      </Text>
    </HStack>
  );
}

export default Footer;
