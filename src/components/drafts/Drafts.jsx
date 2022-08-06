import { Box, Button, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import "./Drafts.css";
import {useNavigate} from 'react-router-dom'
import logo from "../../assets/images/logo.png";
const Drafts = () => {
  const nav = useNavigate()
  return (
    <Stack minH={"100vh"} w={"100%"} bg={"#050826"}>
      <Stack direction={"row"} justifyContent="space-between">
        {/* home buttons */}
        <Stack w="50%" pt={"12"} pb="4" pl="12">
          {/* buttons */}
          <Stack spacing={"4"} w={{base:'35%',xl:'25%'}}>
            <Button className="button-border" _hover={{}} variant={"link"}>
              <Heading color={"white"} fontSize={"sm"} fontWeight="500">
                My Profile
              </Heading>
            </Button>
            <Button className="button-border" _hover={{}} variant={"link"}>
              <Heading color={"white"} fontSize={"sm"} fontWeight="500">
                Leaderboard
              </Heading>
            </Button>
            <Button className="button-border" _hover={{}} variant={"link"}>
              <Heading color={"white"} fontSize={"sm"} fontWeight="500">
                Prizes
              </Heading>
            </Button>
            <Button className="button-border" _hover={{}} variant={"link"}>
              <Heading color={"white"} fontSize={"sm"} fontWeight="500">
                Game Schedule
              </Heading>
            </Button>
            <Button className="button-border" _hover={{}} variant={"link"}>
              <Heading color={"white"} fontSize={"sm"} fontWeight="500">
                Settings
              </Heading>
            </Button>
            <Button onClick={()=>nav('/login')} className="button-border" _hover={{}} variant={"link"}>
              <Heading  color={"white"} fontSize={"sm"} fontWeight="500">
                Logout
              </Heading>
            </Button>
            <Button className="button-border" _hover={{}} variant={"link"}>
              <Heading color={"white"} fontSize={"md"} fontWeight="500">
                Home
              </Heading>
            </Button>
          </Stack>
          {/* timer */}
          <Stack py={"3"} w={{base:'35%',xl:'25%'}}>
            <Text
              textAlign={"center"}
              fontSize={"md"}
              fontWeight="600"
              color={"white"}
            >
              Current Game Ends In
            </Text>
            {/* countdown timer */}
            <Stack
              color={"white"}
              spacing={"3"}
              justifyContent={"center"}
              direction={"row"}
            >
              <Stack>
                <div className="countdowntimer-box"></div>
                <h1>Days</h1>
              </Stack>
              <Stack>
                <div className="countdowntimer-box"></div>
                <h1>Days</h1>
              </Stack>
              <Stack>
                <div className="countdowntimer-box"></div>
                <h1>Days</h1>
              </Stack>
            </Stack>
          </Stack>
          <Stack w={{base:'35%',xl:'25%'}} alignItems={"center"}>
            <Image _hover={{ cursor: "pointer" }} w={"14"} src={logo} />
            <Text
              textAlign={"center"}
              fontSize={"md"}
              fontWeight="600"
              color={"white"}
            >
              Season-Long Leagues
            </Text>
          </Stack>
        </Stack>
        {/* lineup */}
        <Stack
          w="50%"
          direction={"row"}
          pr="20"
          py={"8"}
          justifyContent="space-between"
        >
          {/* edit lineup */}
          <Stack spacing={"4"} alignItems="center">
            <Heading minW={'fit-content'} fontSize={"lg"} className="gradient-color">
              Edit Lineup
            </Heading>
            {/* boxes */}
            <Stack spacing={"3"}>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
              <Box
                border={"2px solid rgba(255, 255, 255, 1)"}
                _hover={{ cursor: "pointer" }}
                boxSize="14"
                borderRadius={"lg"}
                bg="rgba(217, 217, 217, 0.24);"
              ></Box>
            </Stack>
          </Stack>
          {/* balance */}
          <Stack spacing={"4"} alignItems="center">
            <Heading fontSize={"lg"} className="gradient-color">
              Balance
            </Heading>
            <Stack pt='6' spacing={'12'}>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              <Box
                borderRadius={"md"}
                w="60px"
                py={'0.5'}
                bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
              >
                <Heading textAlign={'center'} fontSize={'xs'} color={'black'}>$1000</Heading>
              </Box>
              

            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Drafts;
