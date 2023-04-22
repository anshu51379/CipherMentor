import { Avatar, Box, Stack, Text, VStack, Button } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/anshu51379";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      color={"whiteAlpha.700"}
      minH={"48"}
      px={"16"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>CipherMentor (an initiative by Abhishek Kumar)</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            We are the best crypto trading platform in India, we provide our guidance
            at a very cheap price.
          </Text>
        </VStack>

        <VStack w={'xs'}>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://twitter.com/anshu51379">
              Twitter
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://www.linkedin.com/in/anshu51379/">
              LinkedIn
            </a>
          </Button>
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://instagram.com/anshu51379">
              Instagram
            </a>
          </Button>
        </VStack>

        <VStack>
          <Avatar boxSize={"28"} mt={["4", "0"]} src={avatarSrc} />
          <Button variant={'link'} colorScheme={'white'}>
            <a target={'black'} href="https://github.com/anshu51379">
              @anshu51379
            </a>
          </Button>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
