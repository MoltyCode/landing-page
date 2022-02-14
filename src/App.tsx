import ButtonComponent from "./components/buttonComponent";
import LogoComponent from "./components/logo";
import { Container, Text } from "@chakra-ui/layout";
import { FC, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";
import "./App.css";

const items = [
  { name: "GITHUB", href: "https://github.com/MoltyCode", id: 1 },
  { name: "Pcode", href: "https://the-pcode.vercel.app/", id: 2 },
  {
    name: "YOUTUBE",
    id: 3,
    href: "https://www.youtube.com/channel/UC_xSsrvz8GTxQ7Ykj7XQ35w",
  },
  { name: "TELEGRAM", href: "https://telegram.me/moltycode", id: 4 },
  { name: "INSTAGRAM", href: "https://www.instagram.com/moltycode/", id: 5 },
  { name: "DISCORD", href: "https://discord.gg/zkK29nhT3h", id: 6 },
];

const App: FC = () => {
  const [showLogo, setShowLogo] = useState<boolean>(false);

  useEffect(() => {
    setShowLogo(true);
    setTimeout(() => setShowLogo(false), 2000);
  }, []);

  const MotionTop = motion(Flex);
  const MotionFlex = motion(Flex);
  const MotionText = motion(Text);

  return (
    <Container maxW="container.3xl" p="0px">
      <LogoComponent showLogo={showLogo} />
      <Flex h="100vh" display={showLogo ? "none" : "flex"}>
        <Flex
          style={{ backdropFilter: "blur(20px)" }}
          flex={1}
          bg="#0000005c"
          flexDir="column"
          justifyContent="space-between"
        >
          <div className="blur-left"></div>
          <MotionTop
            initial={{ opacity: 0, y: -300 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            ml={["4", "4", "4", "8", "28"]}
            flexDir="column"
          >
            <Text
              className="aquire"
              mt="6"
              fontSize={["sm", "md", "md", "md", "md"]}
              color="#f8fafd"
            >
              MOLTYCODE
            </Text>
            <Text
              className="aquire"
              fontSize={["30px", "35px", "40px", "40px", "40px"]}
              fontWeight="bold"
              color="#f8fafd"
              mt="20"
            >
              social medias
            </Text>
            <Text
              w={["250px", "400px", "400px", "400px", "400px"]}
              color="gray.200"
              fontSize="15px"
              mt="2"
            >
              We are frontend developer and teach about frontend technologies.
            </Text>
          </MotionTop>
          <MotionFlex
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            width="100%"
            alignItems="center"
            flexDir="column"
          >
            {items.map((item) => {
              return (
                <ButtonComponent
                  key={item.id}
                  name={item.name}
                  href={item.href}
                />
              );
            })}
          </MotionFlex>
          <MotionText
            initial={{ opacity: 0, x: -300 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            zIndex="10"
            color="gray.400"
            mb="3"
            ml={["4", "4", "4", "8", "28"]}
            fontSize="12px"
          >
            © MoltyCode team{" "}
            <Link
              isExternal
              color="#0070f3"
              ml="1"
              href="https://github.com/MoltyCode/landing-page"
            >
              Source
            </Link>
          </MotionText>
        </Flex>
        <Box
          flex={1}
          className="right-box"
          display={["none", "none", "none", "block", "block"]}
        >
          <div className="blur-right"></div>
        </Box>
      </Flex>
    </Container>
  );
};

export default App;
