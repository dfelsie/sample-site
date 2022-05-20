import {
  Link as ChakraLink,
  Text,
  Code,
  List,
  ListIcon,
  ListItem,
  Box,
  SimpleGrid,
  Flex,
  Center,
  Heading,
} from "@chakra-ui/react";
import { CheckCircleIcon, LinkIcon } from "@chakra-ui/icons";

import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import Navbar from "../components/Navbar";
import { Card } from "../components/Card";

const imgs = [
  "https://images.unsplash.com/photo-1650980868242-d736030a99aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080",
  "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080",
];

const Index = () => (
  <Container minHeight="100vh" px={["1%", "2%"]} pb="2%" overflowX={"hidden"}>
    <Navbar />
    <Box
      h="800px"
      w={"100%"}
      bgImage={
        "url(https://images.unsplash.com/photo-1650980868242-d736030a99aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080)"
      }
    >
      <Flex flexDir={"column"} mt={"25%"} ml="2%">
        <Heading
          color="darkgray"
          fontWeight={"bold"}
          fontSize={"48px"}
          textTransform="uppercase"
        >
          Welcome to our community.
        </Heading>
        <Heading color="darkgray" fontWeight={"bold"} fontSize={"24px"}>
          Our Address.
        </Heading>
        <Heading color="darkgray" fontWeight={"bold"} fontSize={"24px"}>
          Our Hours of Operation.
        </Heading>
      </Flex>
    </Box>
    <Flex
      flexDir="column"
      bgImg={"./topo.svg"}
      mt={"-50px"}
      w={"100%"}
      bgColor={"#f5f6f6"}
    >
      <SimpleGrid
        columns={[1, 2, 3]}
        spacingX={5}
        spacingY={8}
        mb={"20px"}
        w={"fit-content"}
        mx={"auto"}
      >
        {imgs.map((img, index) => (
          <Card key={index} img={img} />
        ))}
      </SimpleGrid>
      <Box h={"180px"}>
        <Center>
          <Text fontSize={"3xl"} fontWeight={"light"} color={"black"}>
            This could be a mission statement, used to state what your
            organization is about, and any special qualities you would like to
            emphasize here!
          </Text>
        </Center>
      </Box>
      <Box h={"750px"}>
        <Center>
          <section style={{ height: "100%" }}>
            <Flex
              flexDir={"column"}
              h="20%"
              textAlign={"center"}
              textTransform="capitalize"
              mt={"15px"}
            >
              <Heading
                fontSize={["4rem", "4rem", "8rem"]}
                m={"auto"}
                whiteSpace="nowrap"
              >
                Welcome to <br />
                our <br /> organization!
              </Heading>
              <Heading color={"#8f9295"} fontWeight={"light"}>
                {" "}
                We hope to see you soon!
              </Heading>
            </Flex>
          </section>
        </Center>
      </Box>
    </Flex>

    <Box
      as="footer"
      h="500px"
      bgColor={"#1e252b"}
      w="100%"
      color={"white"}
      py="2.5%"
      px={["2%", "5%"]}
    >
      <Flex w={"100%"} justifyContent="space-between">
        <Flex flexDir="column">
          <Heading fontSize="2xl" fontWeight="bold">
            Our Location
          </Heading>
          <Flex flexDir="column" flexGrow={1} justifyContent="space-around">
            <Text fontSize={["md", "lg"]}>
              This is our location. These are our hours of operation.
            </Text>
            <Text fontSize={["md", "lg"]}>
              This is our contact info. For instance, emails and phone numbers.
            </Text>
          </Flex>
        </Flex>
        <Flex
          flexDir={["column", "column", "row"]}
          w={"33%"}
          justifyContent="space-between"
        >
          <Flex flexDir="column">
            <Heading>Resources</Heading>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
          </Flex>
          <Flex flexDir="column">
            <Heading>Resources</Heading>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
            <Text>Item 1</Text>
          </Flex>
        </Flex>
      </Flex>
    </Box>
  </Container>
);

export default Index;
