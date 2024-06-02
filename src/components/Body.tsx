import { Heading, Image, Text, VStack } from "@chakra-ui/react";
import Bolbol from "../assets/bolbol.svg";

function Body() {
  return (
    <VStack height={"100vh"} width={"100%"} spacing={6} justifyContent={"center"} alignItems={"center"}>
      <Image src={Bolbol} alt={"Bolbol"} />
      <VStack
        paddingX={4}
        paddingY={2}
        spacing={4}
      >
        <Heading>خریدی مطمئن با بلبل نشان</Heading>
        <Text fontSize={"xl"} maxWidth={{ sm: "300px" }} textAlign={"center"}>
          ما بهترین را برای شما انتخاب کرده ایم همین حالا خرید کنید
        </Text>
      </VStack>
    </VStack>
  );
}

export default Body;
