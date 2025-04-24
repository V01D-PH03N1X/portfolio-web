import {Container, Flex, Text} from "@chakra-ui/react";
import {Link} from "react-router";
import {FaDiscord, FaGithub, FaInstagram, FaLinkedinIn, FaTiktok, FaWhatsapp} from "react-icons/fa";

function Footer() {
  return (
    <Container p={4}>
      <Flex direction={"row"} align={"center"} justify={"space-around"} py={4}>
        <Flex direction={"row"} align={"center"} justify={"space-between"} mb={2} gap={4}>
          <Link to={"https://www.instagram.com/darkbastiplays/"} target={"_blank"}><FaInstagram size={20}/></Link>
          <Link to={"https://www.tiktok.com/@darkbastiplaysofficial"} target={"_blank"}><FaTiktok size={20}/></Link>
          <Link to={"https://discord.gg/nVfU6MtytS"} target={"_blank"}><FaDiscord size={20}/></Link>
          <Link to={"https://www.linkedin.com/in/sebastian-schindler-aa216526a/"} target={"_blank"}><FaLinkedinIn
            size={20}/></Link>
          <Link to={"https://github.com/V01D-PH03N1X"} target={"_blank"}><FaGithub size={20}/></Link>
          <Link to={"https://wa.me/+4917656613022"} target={"_blank"}><FaWhatsapp size={20}/></Link>
        </Flex>
      </Flex>
      <Flex direction={"column"} align={"center"} justify={"space-between"} mt={2} gap={1}>
        <Text textStyle={"sm"} color="fg.muted">Made with ❤️ by Sebastian Schindler</Text>
        <Text textStyle={"md"} color="fg.muted">&copy; 2023 Schindlertai.de. All rights reserved.</Text>
      </Flex>
    </Container>
  );
}

export default Footer