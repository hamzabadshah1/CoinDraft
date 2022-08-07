import { Button, Center, Heading, HStack, Image, Stack, Tag, Text, VStack, chakra } from '@chakra-ui/react'
import React from 'react'
import '../../App.css'
import logo from '../../assets/images/logo.png'

const ContestLobby = () => {
    return (
        <>
            <Stack bg={"#050826"} minH={"100vh"} px={{ base: '2', sm: '12' }} py={'10'} spacing={'6'} justify={{ base: 'center' }} align={'center'}>
                {/* Heading Container */}
                <Stack direction={{ base: 'row', md: 'column' }} w={"full"} align={{ base: 'center' }} justify={{ base: 'space-between', md: 'inherit' }}>
                    <Heading fontSize={{ base: '3xl', sm: '5xl', md: '5xl' }} bgGradient='linear(180deg, #FCFF00 40%, #3FFF13 100%)' bgClip='text'>1v1 Lobby</Heading>
                    <Image
                        display={{ base: 'inherit', md: 'none' }}
                        _hover={{ cursor: "pointer" }}
                        w={{ base: "14", sm: '20', md: "28", lg: "40" }}
                        src={logo}
                    />
                </Stack>
                {/* Content Container */}
                <Stack direction={'row'} h={{ base: '60vh', lg: '55vh' }} w={'full'}>
                    {/* Sidebar Button Container */}
                    <Stack display={{ base: 'none', md: 'inherit' }} align={'center'} justify={'space-between'}>
                        <Stack>
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
                                    Leaderboard
                                </Heading>
                            </Button>
                            <Button w={'36'} _hover={{ textDecoration: 'none' }} className="button-border" variant={"link"}>
                                <Heading fontSize={"lg"} color={'white'} fontWeight="700">
                                    Prizes
                                </Heading>
                            </Button>
                        </Stack>
                        <VStack>
                            <Image
                                _hover={{ cursor: "pointer" }}
                                w={{ base: "14", sm: '32', md: "32", lg: "24" }}
                                src={logo}
                            />
                            <Text color={'white'} fontStyle={'bold'}>Season-Long League</Text>
                        </VStack>
                    </Stack>

                    {/* Table Container */}
                    <Stack mx={{ base: '0 !important', md: '4 !important' }} flex={'1'}>
                        <Button className='button-border' _hover={{}} _focus={{}} _active={{}} bgColor={'#25294A'} color={'white'}>Create a 1v1 contest</Button>
                        <Stack className='example' direction={'row'} spacing={'4'} overflow={'auto'}>

                            <Stack direction={'row'} color={'#96A9DE'} p={'4'} bgColor={'#25294A'} borderRadius={'lg'} w={'50%'}>
                                <Stack w={'50%'}>
                                    <Text>Contest Id: #123456789</Text>
                                    <Stack fontWeight={'bold'}>
                                        <Text color={'white'}><chakra.span id='button-text' >Mode:</chakra.span>1v1 </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Players:</chakra.span>1/2 </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Buy-In fee:</chakra.span>N/A </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Buy-In Currency:</chakra.span>N/A </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Game Duration:</chakra.span>12Hours </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Payout Scale:</chakra.span>N/A</Text>
                                    </Stack>
                                </Stack>

                                <Stack w={'50%'}>
                                    <Stack>
                                        <Text color={'white'}>Players Registered</Text>
                                        <Stack bgColor={'#050826'} h={'20'} borderRadius={'lg'} px={'2'} py={'1'} overflow={'auto'} className='example'>
                                            <Text id='button-text' fontWeight={'bold'} fontSize={'lg'}>1. Asad</Text>
                                            <Text id='button-text' fontWeight={'bold'} fontSize={'lg'}>2. Sufyan</Text>
                                            <Text id='button-text' fontWeight={'bold'} fontSize={'lg'}>3. Huma</Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                            <Stack direction={'row'} color={'#96A9DE'} p={'4'} bgColor={'#25294A'} borderRadius={'lg'} w={'50%'}>
                                <Stack w={'50%'}>
                                    <Text>Contest Id: #123456789</Text>
                                    <Stack fontWeight={'bold'}>
                                        <Text color={'white'}><chakra.span id='button-text' >Mode:</chakra.span>1v1 </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Players:</chakra.span>1/2 </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Buy-In fee:</chakra.span>N/A </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Buy-In Currency:</chakra.span>N/A </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Game Duration:</chakra.span>12Hours </Text>
                                        <Text color={'white'}><chakra.span id='button-text' >Payout Scale:</chakra.span>N/A</Text>
                                    </Stack>
                                </Stack>

                                <Stack w={'50%'}>
                                    <Stack>
                                        <Text color={'white'}>Players Registered</Text>
                                        <Stack bgColor={'#050826'} h={'20'} borderRadius={'lg'} px={'2'} py={'1'} overflow={'auto'} className='example'>
                                            <Text id='button-text' fontWeight={'bold'} fontSize={'lg'}>1. Asad</Text>
                                            <Text id='button-text' fontWeight={'bold'} fontSize={'lg'}>2. Sufyan</Text>
                                            <Text id='button-text' fontWeight={'bold'} fontSize={'lg'}>3. Huma</Text>
                                        </Stack>
                                    </Stack>
                                </Stack>
                            </Stack>

                        </Stack >
                        {/* Additional Stack */}
                        <Stack Stack w={'36'} display={{ base: 'none', md: 'inherit' }} align={'center'} ></Stack >
                    </Stack >
                    {/* Home Mibile Screen Button */}
                    <Button Button w={'40vw'} display={{ base: 'inherit', md: 'none' }} bgGradient='linear(180deg, #FCFF00 10%, #3FFF13 100%)' > Home</Button >
                </Stack >
            </Stack>
        </>
    )
}

export default ContestLobby