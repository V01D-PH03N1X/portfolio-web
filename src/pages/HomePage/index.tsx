import {Avatar, Button, Card, Container, defineStyle, Flex, Heading, Separator, Stack, Text,} from "@chakra-ui/react";
import Header from "@/components/header";
import profilePicture from "@/assets/profilePicture.jpeg";
import Footer from "@/components/footer";
import {FaGithub, FaUnlock} from "react-icons/fa";
import {motion} from "motion/react";
import {CookieConsent} from "react-cookie-consent";
import posthog from "posthog-js";
import {Tooltip} from "@/components/ui/tooltip.tsx";
import {useId} from "react"

function HomePage() {
  const ringCss = defineStyle({
    outlineWidth: "2px",
    outlineColor: "colorPalette.500",
    outlineOffset: "2px",
    outlineStyle: "solid",
  });
  const id = useId()

  return (
    <Container>
      <Header/>
      <Flex direction={"column"} justify={"center"} align={"center"}>
        <motion.div
          initial={{opacity: 0, scale: 0}}
          whileInView={{opacity: 1, scale: 1}}
          transition={{
            duration: 0.4,
            scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
          }}
        >
          <Flex direction={"row"} justify={"center"} align={"center"}>
            <Flex direction={"column"} m={5}>
              <Heading size={"2xl"}>Sebastian Schindler</Heading>
              <Text fontSize="sm" color="fg.muted">
                Angehender Softwaredeveloper
              </Text>
            </Flex>
            <Tooltip content="Klicke um einen Termin zu Buchen!" ids={{trigger: id}} openDelay={500}
                     positioning={{placement: "top-start"}}>
              <Avatar.Root
                css={ringCss}
                size={"2xl"}
                colorPalette={"green"}
                borderless={false}
                ids={{root: id}}
                onClick={() => {
                  posthog.capture("profile_picture_clicked redirected to cal.dev!");
                  window.open("https://cal.com/sschindler", "_blank");
                }}
                style={{
                  cursor: "pointer",
                  marginLeft: "20px",
                  marginTop: "10px",
                }}
              >
                <Avatar.Fallback name="Sebastian Schindler"/>
                <Avatar.Image
                  src={profilePicture}
                  style={{filter: "brightness(2)"}}
                />
              </Avatar.Root>
            </Tooltip>
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
          <Flex direction={"column"} m={5} maxW={"2xl"}>
            <Text fontSize="lg" color="fg.muted" textAlign={"center"}>
              Ich bin ein leidenschaftlicher Softwareentwickler mit einem
              starken Fokus auf Frontend-Technologien. Ich habe Erfahrung in der
              Entwicklung von Webanwendungen mit React, TypeScript und Chakra
              UI. Ich bin immer auf der Suche nach neuen Herausforderungen und
              Möglichkeiten, meine Fähigkeiten zu erweitern.
            </Text>
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
          <Flex direction={"column"} m={5} maxW={"2xl"}>
            <Text fontSize="lg" color="fg.muted" textAlign={"center"}>
              Ich bin ein Teamplayer und arbeite gerne mit anderen Entwicklern
              zusammen, um innovative Lösungen zu entwickeln. Ich bin auch daran
              interessiert, meine Kenntnisse stetig zu erweitern und neue
              Technologien zu erlernen.
            </Text>
          </Flex>
        </motion.div>
      </Flex>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 0.4,
          scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
      >
        <Flex direction={"column"} align={"center"} justify={"center"} m={5}>
          <Heading size={"2xl"} mb={2}>
            Skills
          </Heading>
          <Text
            fontSize="lg"
            color="fg.muted"
            maxW={"2xl"}
            textAlign={"center"}
          >
            Ich habe Erfahrung in der Entwicklung von Webanwendungen mit React,
            TypeScript und Sass. Zudem habe ich gute Kenntnise mit Linux und
            Docker. Beruflich habe ich bereits mit Java und C++ gearbeitet. In
            meiner schulischen Ausbildung habe ich mit C# und C++ auch Projekte
            umgesetzt.
          </Text>
        </Flex>
      </motion.div>
      <Separator/>
      <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{
          duration: 0.4,
          scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
        }}
      >
        <Flex direction={"column"} align={"center"} justify={"center"} m={5}>
          <Heading size={"2xl"} mb={2}>
            Projekte
          </Heading>
          <Stack
            gap={6}
            direction={"row"}
            wrap={"wrap"}
            align={"center"}
            justify={"center"}
            m={5}
          >
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.4,
                scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
              }}
            >
              <Card.Root width="320px" variant={"elevated"}>
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image
                      src="data:image/png;base64,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"/>
                    <Avatar.Fallback name="YouTube-DL GUI"/>
                  </Avatar.Root>
                  <Card.Title mb="2">YouTube-DL GUI</Card.Title>
                  <Card.Description>
                    Ein einfaches GUI für YouTube-DL, der es ermöglicht, Videos
                    von verschiedenen Plattformen herunterzuladen.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button asChild variant="outline">
                    <a
                      target={"_blank"}
                      href={"https://v01dph03n1x.gumroad.com/l/ytdl"}
                    >
                      Mehr dazu...
                    </a>
                  </Button>
                </Card.Footer>
              </Card.Root>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.4,
                scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
              }}
            ></motion.div>
            <Card.Root width="320px" variant={"elevated"}>
              <Card.Body gap="2">
                <Avatar.Root size="lg" shape="rounded">
                  <Avatar.Image src="https://tikfinity.zerody.one/img/tikfinity.png"/>
                  <Avatar.Fallback name="TikFintiy"/>
                </Avatar.Root>
                <Card.Title mb="2">TikFinity Widget Developer</Card.Title>
                <Card.Description>
                  Aktiver Mitentwickler von TikFinity Widgets. Für ein besseres
                  und angenehmeres Streamen bei TikTok Live.
                </Card.Description>
              </Card.Body>
              <Card.Footer justifyContent="flex-end">
                <Button asChild variant="outline">
                  <a target={"_blank"} href={"https://tikfinity.zerody.one/"}>
                    Mehr dazu...
                  </a>
                </Button>
              </Card.Footer>
            </Card.Root>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.4,
                scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
              }}
            >
              <Card.Root width="320px" variant={"elevated"}>
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <Avatar.Image
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png"/>
                    <Avatar.Fallback name="Create React App"/>
                  </Avatar.Root>
                  <Card.Title mb="2">CRA Template</Card.Title>
                  <Card.Description>
                    Einfaches React App Template mit grundlegenden Dependencies
                    und Konfigurationen.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button asChild variant="outline">
                    <a
                      target={"_blank"}
                      href={
                        "https://github.com/V01D-PH03N1X/cra-template-voidphoenix"
                      }
                    >
                      Mehr dazu...
                    </a>
                  </Button>
                </Card.Footer>
              </Card.Root>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.4,
                scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
              }}
            >
              <Card.Root width="320px" variant={"elevated"}>
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <FaGithub size={30}/>
                  </Avatar.Root>
                  <Card.Title mb="2">Portfolio Website</Card.Title>
                  <Card.Description>
                    Der Source Code für diese Portfolio Website. Ja, dieses
                    Portfolio ist kein Template und ist OpenSource.
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button asChild variant="outline">
                    <a
                      target={"_blank"}
                      href={"https://github.com/V01D-PH03N1X/portfolio-web"}
                    >
                      Mehr dazu...
                    </a>
                  </Button>
                </Card.Footer>
              </Card.Root>
            </motion.div>
            <motion.div
              initial={{opacity: 0}}
              whileInView={{opacity: 1}}
              transition={{
                duration: 0.4,
                scale: {type: "spring", visualDuration: 0.4, bounce: 0.5},
              }}
            >
              <Card.Root width="320px" variant={"elevated"}>
                <Card.Body gap="2">
                  <Avatar.Root size="lg" shape="rounded">
                    <FaUnlock size={28}/>
                  </Avatar.Root>
                  <Card.Title mb="2">CodeGuessr</Card.Title>
                  <Card.Description>
                    Ein kleines Spiel für zwischendurch, bist du so schlau und
                    schaffst du es den Code zu knacken?
                  </Card.Description>
                </Card.Body>
                <Card.Footer justifyContent="flex-end">
                  <Button asChild variant="outline">
                    <a
                      target={"_blank"}
                      href={"https://v01dph03n1x.gumroad.com/l/ytdl"}
                    >
                      Zum Spiel...
                    </a>
                  </Button>
                </Card.Footer>
              </Card.Root>
            </motion.div>
          </Stack>
        </Flex>
      </motion.div>
      <Separator/>
      <Footer/>
      <CookieConsent
        location="bottom"
        style={{backgroundColor: "#121212"}}
        buttonStyle={{backgroundColor: "yellow", borderRadius: "5px"}}
        buttonText={"Akzeptieren"}
        declineButtonText={"Ablehnen"}
        expires={14}
        cookieName={"cookieConsent"}
        onAccept={() => {
          posthog.capture("Accepted Cookies", {property: true});
        }}
      >
        Diese Website verwendet Cookies, um Ihnen die bestmögliche Erfahrung zu
        bieten.
      </CookieConsent>
    </Container>
  );
}

export default HomePage;
