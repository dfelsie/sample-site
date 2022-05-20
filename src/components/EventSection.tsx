import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

type Props = {
  isOther: boolean;
};

export default function EventSection({ isOther }: Props) {
  return (
    <Flex
      h={"200px"}
      flexGrow={1}
      bgColor={isOther ? "darkgrey" : "lightgray"}
      w={"100%"}
    >
      <Box>
        <Image
          h={"100%"}
          src="https://images.unsplash.com/photo-1650980868242-d736030a99aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY1MTYyNjM1Nw&ixlib=rb-1.2.1&q=80&w=1080"
        />
      </Box>
    </Flex>
  );
}
