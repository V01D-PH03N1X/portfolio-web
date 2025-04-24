import {ColorModeButton} from "@/components/ui/color-mode.tsx";
import {Badge, Flex, HStack} from "@chakra-ui/react";
import {GrLocation} from "react-icons/gr";
import {TbTimezone} from "react-icons/tb";
import {CiClock1} from "react-icons/ci";
import {useEffect, useState} from "react";
import {TimeObject} from "@/types/time.ts";
import axios from "axios";

function Header() {
  const [time, setTime] = useState<TimeObject | undefined>(undefined);

  const fetchTime = () => {
    axios
      .get("https://timeapi.io/api/time/current/zone?timeZone=Europe%2FBerlin")
      .then((result) => {
        setTime(result.data);
      });
  };

  useEffect(() => {
    fetchTime(); // Fetch time immediately on mount
    const getTimeInterval = setInterval(fetchTime, 30000); // Fetch time every 60 seconds
    return () => clearInterval(getTimeInterval); // Cleanup interval on unmount
  }, []);

  return (
    <Flex
      direction={"row"}
      align={"center"}
      justify={"space-between"}
      mt={5}
      mb={10}
      mx={5}
    >
      <ColorModeButton mr={2}/>
      <HStack direction={"row"}>
        <Badge variant="outline" colorPalette="orange" size={"sm"}>
          <GrLocation/>
          Bavaria, Hof Saale
        </Badge>
        <Badge variant="outline" colorPalette="purple" size={"sm"}>
          <TbTimezone/>
          UTC/GMT +2
        </Badge>
        <Badge variant="outline" colorPalette="purple" size={"sm"}>
          <CiClock1/>
          {time?.time}
        </Badge>
      </HStack>
    </Flex>
  );
}

export default Header;
