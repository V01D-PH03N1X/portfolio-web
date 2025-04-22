import {Avatar, Container, defineStyle, Flex, Heading, Text} from "@chakra-ui/react"
import Header from "@/components/header";
import profilePicture from "@/assets/profilePicture.jpeg";


export default function HomePage() {
  const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "colorPalette.500",
    outlineOffset: "2px",
    outlineStyle: "solid",
  })

  return (
    <Container>
      <Header/>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <Flex direction={"row"} justify={"center"} align={"center"}>
          <Flex direction={"column"} m={5}>
            <Heading size={"2xl"}>Sebastian Schindler</Heading>
            <Text fontSize="sm" color="fg.muted">
              Angehender Softwaredeveloper mit Erfahrung
            </Text>
          </Flex>
          <Avatar.Root css={ringCss} size={"2xl"} colorPalette={"green"} borderless={false}>
            <Avatar.Fallback name="Sebastian Schindler"/>
            <Avatar.Image src={profilePicture} style={{filter: "brightness(2)"}}/>
          </Avatar.Root>
        </Flex>
        <Flex direction={"column"} m={5} maxW={"2xl"}>
          <Text fontSize="lg" color="fg.muted">
            Ich bin ein leidenschaftlicher Softwareentwickler mit einem starken Fokus auf Frontend-Technologien. Ich
            habe Erfahrung in der Entwicklung von Webanwendungen mit React, TypeScript und Chakra UI. Ich bin immer auf
            der Suche nach neuen Herausforderungen und Möglichkeiten, meine Fähigkeiten zu erweitern.
          </Text>
        </Flex>
      </Flex>
    </Container>
  )
}