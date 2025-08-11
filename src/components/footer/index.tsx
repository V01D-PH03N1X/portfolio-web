import {Container, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router";
import {FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp,} from "react-icons/fa";
import {motion} from "motion/react";

function Footer() {
  return (
    <Container p={4}>
      <motion.div
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{
          duration: 0.4,
          scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
      >
        <Flex
          direction={"row"}
          align={"center"}
          justify={"space-around"}
          py={4}
        >
          <Flex
            direction={"row"}
            align={"center"}
            justify={"space-between"}
            mb={2}
            gap={4}
          >
            <Link
              to={"https://www.instagram.com/darkbastiplays/"}
              target={"_blank"}
            >
              <FaInstagram size={20}/>
            </Link>
            <Link
              to={"https://www.tiktok.com/@pingubasti"}
              target={"_blank"}
            >
              <FaTiktok size={20}/>
            </Link>
            <Link to={"https://discord.gg/nVfU6MtytS"} target={"_blank"}>
              <FaDiscord size={20}/>
            </Link>
            <Link
              to={"https://www.linkedin.com/in/sebastian-schindler-aa216526a/"}
              target={"_blank"}
            >
              <FaLinkedinIn size={20}/>
            </Link>
            <Link to={"https://github.com/V01D-PH03N1X"} target={"_blank"}>
              <FaGithub size={20}/>
            </Link>
            <Link to={"https://wa.me/+4915147933486"} target={"_blank"}>
              <FaWhatsapp size={20}/>
            </Link>
          </Flex>
        </Flex>
      </motion.div>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 0.4,
          scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
      >
        <Flex
          direction={"column"}
          align={"center"}
          justify={"space-between"}
          mt={2}
          gap={1}
        >
          <Text textStyle={"sm"} color="fg.muted">
            Made with ❤️ by Sebastian Schindler
          </Text>
          <Text textStyle={"md"} color="fg.muted">
            &copy; 2023 Schindlertai.de. All rights reserved.
          </Text>
        </Flex>
      </motion.div>
    </Container>
  );
}

export default Footer;
