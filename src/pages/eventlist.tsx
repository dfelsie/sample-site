import { Container, Flex } from "@chakra-ui/react";
import React from "react";
import EventSection from "../components/EventSection";
import Navbar from "../components/Navbar";

type Props = {};

//make array of 1-10
const numbers = Array.from(Array(10).keys());

export default function eventlist({}: Props) {
  return (
    <Flex minHeight="100vh" px="2%" pb="2%" w={"100%"}>
      <Navbar />
      <Flex mb={"25px"} flexDir="column" w={"100%"}>
        {numbers.map((number, index) => (
          <EventSection
            key={`eventsectionnumber${index}`}
            isOther={index % 2 === 0}
          ></EventSection>
        ))}
      </Flex>
    </Flex>
  );
}
