import { Heading, Text, VStack } from "@chakra-ui/react";

function Body() {
  return (
    <VStack
      paddingX={4}
      paddingY={2}
      height={"100vh"}
      width={"100%"}
      justifyContent={"center"}
      alignItems={"center"}
      spacing={4}
    >
      <Heading>خریدی مطمئن با بلبل نشان</Heading>
      <Text fontSize={"xl"} maxWidth={{ sm: "300px" }} textAlign={"center"}>
        ما بهترین را برای شما انتخاب کرده ایم همین حالا خرید کنید
      </Text>
    </VStack>
  );
}

export default Body;
