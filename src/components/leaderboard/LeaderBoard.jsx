import { Button, Heading, Image, Menu, MenuButton, Stack } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/images/logo.png'
import "../../App.css";
import { BsFillCaretDownFill } from 'react-icons/bs'


const LeaderBoard = () => {
    return (
        <>
            <Stack bg={"#050826"} h={"100vh"} px={'12'} py={'10'}>
                <Stack direction={'row'} align={'end'}>
                    <Stack >
                        <Button w={'36'} _hover={{ textDecoration: 'none' }} className="button-border" variant={"link"}>
                            <Heading fontSize={"lg"} color={'white'} fontWeight="700">
                                Home
                            </Heading>
                        </Button>
                        <Button w={'36'} _hover={{ textDecoration: 'none' }} className="button-border" variant={"link"}>
                            <Heading fontSize={"lg"} color={'white'} fontWeight="700">
                                MY Lineup
                            </Heading>
                        </Button>
                        <Button w={'36'} _hover={{ textDecoration: 'none' }} className="button-border" variant={"link"}>
                            <Heading fontSize={"lg"} color={'white'} fontWeight="700">
                                Prizes
                            </Heading>
                        </Button>
                        <Button w={'36'} _hover={{ textDecoration: 'none' }} className="button-border" variant={"link"}>
                            <Heading fontSize={"lg"} color={'white'} fontWeight="700">
                                Game Schedule
                            </Heading>
                        </Button>
                    </Stack>
                    <Stack align={'center'} flex={'1'}>
                        <Heading as={'h1'} fontSize={'5xl'} bgGradient='linear(180deg, #FCFF00 40%, #3FFF13 100%)' bgClip='text'>Leaderboard</Heading>
                        <Image
                            _hover={{ cursor: "pointer" }}
                            w={{ base: "20", md: "28", lg: "40" }}
                            src={logo}
                        />
                    </Stack>
                    <Stack w={'36'} />
                </Stack>
                <Stack bgGradient={'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'} >
                    <Menu>
                        <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
                            Actions
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
                            Actions
                        </MenuButton>
                    </Menu>
                    <Menu>
                        <MenuButton as={Button} rightIcon={<BsFillCaretDownFill />}>
                            Actions
                        </MenuButton>
                    </Menu>
                </Stack>
            </Stack>
        </>
    )
}

export default LeaderBoard