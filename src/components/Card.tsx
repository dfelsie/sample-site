import { Box, Heading, Text, Image } from "@chakra-ui/react";

export const Card = ({ img }) => {
  return (
    <Box
      textAlign={"center"}
      bg="#bb0004"
      color={"white"}
      borderRadius={20}
      as="article"
      w={["360px", "300px", "360px"]}
      border="5px solid #bb0004"
      transition="all 0.3s ease-in-out"
      _hover={{
        border: "5px solid gold",
        transform: "scale(1.1)",
      }}
    >
      <Image
        p={2}
        h="350px"
        objectFit="fill"
        w="100%"
        src={img}
        alt="stock image"
      />
      <Heading size="xl" fontWeight="bold">
        {" "}
        Title{" "}
      </Heading>
      <Text noOfLines={2}> More Info</Text>
    </Box>
  );
};
