import { Flex, Button, Text } from "@chakra-ui/react";
import React from "react";
import { default as NextLink } from "next/link";

type Props = {};

export default function Navbar({}: Props) {
  return (
    <>
      <Flex
        boxShadow={"lg"}
        bgColor="white"
        h={"75px"}
        px={"2.5%"}
        justifyContent={"space-between"}
        w={"100%"}
        pos="absolute"
        top={0}
        alignItems="center"
        fontSize={["18px", "18px", "26px"]}
      >
        <Flex w={["40%", "20%"]} justifyContent={"space-between"}>
          <Text _hover={{ borderTop: "1px solid black" }}>Info</Text>
          <Text _hover={{ borderTop: "1px solid black" }}>Info</Text>
        </Flex>
        <Flex w={["40%", "20%"]} justifyContent={"space-between"}>
          <Text _hover={{ borderTop: "1px solid black" }}>Info</Text>
          <Text _hover={{ borderTop: "1px solid black" }}>Info</Text>
        </Flex>
      </Flex>
    </>
  );
}
