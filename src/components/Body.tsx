import { Box, Text } from "@chakra-ui/react";

function Body() {
  return (
    <Box
      paddingX={4}
      paddingY={2}
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <div>Body</div>
      <Text fontSize={"6xl"}>سلام بچ</Text>
    </Box>
  );
}

export default Body;
