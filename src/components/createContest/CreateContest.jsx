import { Button, Heading, Image, Select, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import logo from '../../assets/images/logo.png'
import { useNavigate } from 'react-router-dom';


const CreateContest = () => {
    const nav = useNavigate()
    return (
        <>
            <Stack bg={"#050826"} minH={"100vh"} px={{ base: '2', sm: '12' }} py={{ base: '4', md: '4' }} spacing={{ base: '6' }} align={'center'}>
                <Stack spacing={'0'}>
                    <Stack w={"full"} align={{ base: 'end', md: 'center' }} justify={{ base: 'space-between', md: 'end' }}>
                        <Image
                            _hover={{ cursor: "pointer" }}
                            w={{ base: "14", sm: '20', md: "24", lg: "30" }}
                            src={logo}
                        />
                    </Stack>
                    <Heading id='button-text'>Create a 1v1 Contest</Heading>
                </Stack>
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'}>Create A Contest To Play With Friends Or Anyone On The Globe!</Text>
                <Stack direction={{ base: 'column', md: 'row' }} h={'35vh'} w={'full'} borderRadius={'lg'} px={'4'} py={'6'} justify={'center'}>
                    {/* Left options */}
                    <Stack w={{ base: '100%', md: '50%' }} className={'test'}>
                        <Stack direction='row' align={'center'} justify={'center'}>
                            <Stack w={{ base: '70%', md: '50%' }} h={'10'} align={'center'} justify={'center'} bgColor={'#25294A'} borderRadius={'full'}>
                                <Text color={'white'}>Select Game Mode</Text>
                            </Stack>
                            <Stack w={{ base: '30%', md: '20%' }}>
                                <Select _hover={{}} _active={{}} _focus={{}} variant={'filled'} size={'sm'} bgColor={'#25294A'} borderRadius={'lg'} color={'#88FF0C'} fontWeight={'bold'} border={'0 !important'} defaultValue={'1v1'} >
                                    <option style={{ bgColor: 'red' }} value='1v1'>1v1</option>
                                    <option style={{ bgColor: 'red' }} value='option2'>Option 2</option>
                                    <option style={{ bgColor: 'red' }} value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Stack>
                        <Stack direction='row' align={'center'} justify={'center'}>
                            <Stack w={{ base: '70%', md: '50%' }} h={'10'} align={'center'} justify={'center'} bgColor={'#25294A'} borderRadius={'full'}>
                                <Text color={'white'}>Select Game Mode</Text>
                            </Stack>
                            <Stack w={{ base: '30%', md: '20%' }}>
                                <Select _hover={{}} _active={{}} _focus={{}} variant={'filled'} size={'sm'} bgColor={'#25294A'} borderRadius={'lg'} color={'#88FF0C'} fontWeight={'bold'} border={'0 !important'} defaultValue={'1v1'} >
                                    <option style={{ bgColor: 'red' }} value='1v1'>1v1</option>
                                    <option style={{ bgColor: 'red' }} value='option2'>Option 2</option>
                                    <option style={{ bgColor: 'red' }} value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Stack>
                        <Stack direction='row' align={'center'} justify={'center'}>
                            <Stack w={{ base: '70%', md: '50%' }} h={'10'} align={'center'} justify={'center'} bgColor={'#25294A'} borderRadius={'full'}>
                                <Text color={'white'}>Select Game Mode</Text>
                            </Stack>
                            <Stack w={{ base: '30%', md: '20%' }}>
                                <Select _hover={{}} _active={{}} _focus={{}} variant={'filled'} size={'sm'} bgColor={'#25294A'} borderRadius={'lg'} color={'#88FF0C'} fontWeight={'bold'} border={'0 !important'} defaultValue={'1v1'} >
                                    <option style={{ bgColor: 'red' }} value='1v1'>1v1</option>
                                    <option style={{ bgColor: 'red' }} value='option2'>Option 2</option>
                                    <option style={{ bgColor: 'red' }} value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Stack>
                    </Stack>
                    {/* Right options */}
                    <Stack w={{ base: '100%', md: '50%' }}>
                        <Stack direction='row' align={'center'} justify={'center'}>
                            <Stack w={{ base: '70%', md: '50%' }} h={'10'} align={'center'} justify={'center'} bgColor={'#25294A'} borderRadius={'full'}>
                                <Text color={'white'}>Select Game Mode</Text>
                            </Stack>
                            <Stack w={{ base: '30%', md: '20%' }}>
                                <Select _hover={{}} _active={{}} _focus={{}} variant={'filled'} size={'sm'} bgColor={'#25294A'} borderRadius={'lg'} color={'#88FF0C'} fontWeight={'bold'} border={'0 !important'} defaultValue={'1v1'} >
                                    <option style={{ bgColor: 'red' }} value='1v1'>1v1</option>
                                    <option style={{ bgColor: 'red' }} value='option2'>Option 2</option>
                                    <option style={{ bgColor: 'red' }} value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Stack>
                        <Stack direction='row' align={'center'} justify={'center'}>
                            <Stack w={{ base: '70%', md: '50%' }} h={'10'} align={'center'} justify={'center'} bgColor={'#25294A'} borderRadius={'full'}>
                                <Text color={'white'}>Select Game Mode</Text>
                            </Stack>
                            <Stack w={{ base: '30%', md: '20%' }}>
                                <Select _hover={{}} _active={{}} _focus={{}} variant={'filled'} size={'sm'} bgColor={'#25294A'} borderRadius={'lg'} color={'#88FF0C'} fontWeight={'bold'} border={'0 !important'} defaultValue={'1v1'} >
                                    <option style={{ bgColor: 'red' }} value='1v1'>1v1</option>
                                    <option style={{ bgColor: 'red' }} value='option2'>Option 2</option>
                                    <option style={{ bgColor: 'red' }} value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Stack>
                        <Stack direction='row' align={'center'} justify={'center'}>
                            <Stack w={{ base: '70%', md: '50%' }} h={'10'} align={'center'} justify={'center'} bgColor={'#25294A'} borderRadius={'full'}>
                                <Text color={'white'}>Select Game Mode</Text>
                            </Stack>
                            <Stack w={{ base: '30%', md: '20%' }}>
                                <Select _hover={{}} _active={{}} _focus={{}} variant={'filled'} size={'sm'} bgColor={'#25294A'} borderRadius={'lg'} color={'#88FF0C'} fontWeight={'bold'} border={'0 !important'} defaultValue={'1v1'} >
                                    <option style={{ bgColor: 'red' }} value='1v1'>1v1</option>
                                    <option style={{ bgColor: 'red' }} value='option2'>Option 2</option>
                                    <option style={{ bgColor: 'red' }} value='option3'>Option 3</option>
                                </Select>
                            </Stack>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack align={'center'}>
                    <Button _hover={{}} _active={{}} _focus={{}} onClick={() => nav('/contestcreated')} w={{ base: 'fit-content', sm: '30vw' }} borderRadius={'full'} fontWeight={'bold'} bgGradient='linear(180deg, #FCFF00 10%, #3FFF13 100%)'>Create My Contest</Button>
                    <Text fontSize={{ base: '0.5rem', sm: 'xs' }} color={'white'} textAlign={'center'}>By Creating A Contest, I Agree To CoinDraft Terms And Conditions</Text>
                </Stack>
            </Stack>
        </>
    )
}

export default CreateContest