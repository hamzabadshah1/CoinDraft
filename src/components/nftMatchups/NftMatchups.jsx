import React from 'react';
import {
  Button,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  Select,
  chakra,
} from '@chakra-ui/react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  useDisclosure,
} from '@chakra-ui/react';
import Info from '../../assets/images/info.png';
import Btn1img1 from '../../assets/images/bayc.png';
import Btn1img2 from '../../assets/images/otherdeed.png';
import Btn2img1 from '../../assets/images/3d-Logo.png';
import Btn2img2 from '../../assets/images/lazy-lions.png';
import Btn3img1 from '../../assets/images/azuki.png';
import Btn3img2 from '../../assets/images/moonbirds.png';
import win from '../../assets/images/win.png';
import { useNavigate } from 'react-router-dom';
import '../../App.css';

const NftMatchups = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nav = useNavigate();
  return (
    <Stack
      minH={'100vh'}
      justifyContent="center"
      alignItems={'center'}
      w={'100%'}
      bg={'#050826'}
      p={{ base: 5, md: 0 }}
    >
      <Stack w={{ base: '100%', md: '90%', lg: '70%', xl: '50%' }}>
        <Stack pt={5}>
          <Heading
            fontSize={{ base: '3xl', sm: '5xl', md: '5xl' }}
            bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
            bgClip="text"
          >
            NFT MATCHUPS
          </Heading>
          <Text color={'white'} fontWeight={'bold'}>
            PICK THE WINNER & ASSIGN A CONFIDENCE RANK TO EACH PICK
          </Text>
        </Stack>
        <Stack
          bg={'rgba(217, 217, 217, 0.24);'}
          border={'2px solid #FF0000'}
          borderRadius={'29px'}
          p={3}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems={'center'}
          >
            <Stack w={{ base: '100%', md: '80%', lg: '80%', xl: '85%' }}>
              <HStack>
                <Image src={Info} w={'6'} />
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'}>
                  BOARD APE YACHT CLUB VS OTHERDEED
                </Text>
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }} onClick={onOpen}>
                <Modal
                  isOpen={isOpen}
                  onClose={onClose}
                  bgColor={'#2D325A'}
                  isCentered
                >
                  <ModalOverlay />
                  <ModalContent bgColor={'#2D325A'}>
                    <ModalHeader>
                      <Heading
                        fontSize={'lg'}
                        bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                        bgClip="text"
                        textAlign={'center'}
                      >
                        NFT MATCHUP DETAILS
                      </Heading>
                    </ModalHeader>
                    <ModalBody>
                      <Stack gap={10}>
                        <HStack justifyContent={'center'}>
                          <Image src={Btn1img1} w="15" />
                          <Stack lineHeight={'15px'}>
                            <Text color={'white'} fontWeight={'bold'}>
                              START FP: 84.01 ETH
                            </Text>
                            <Text color={'white'} fontWeight={'bold'}>
                              CURRENT FP: 93.3 ETH
                            </Text>
                            <Text color={'white'} fontWeight={'bold'}>
                              PERCENT CHANGE:{' '}
                              <chakra.span color={'#3FFF13'}>
                                {' '}
                                1.11%{' '}
                              </chakra.span>
                            </Text>
                          </Stack>
                        </HStack>

                        <HStack justifyContent={'center'}>
                          <Image src={Btn1img2} w="15" />
                          <Stack lineHeight={'15px'}>
                            <Text color={'white'} fontWeight={'bold'}>
                              START FP: 5.08 ETH
                            </Text>
                            <Text color={'white'} fontWeight={'bold'}>
                              CURRENT FP: 2.46 ETH
                            </Text>
                            <Text color={'white'} fontWeight={'bold'}>
                              PERCENT CHANGE:{' '}
                              <chakra.span color={'#FF0000'}>
                                {' '}
                                48.11%{' '}
                              </chakra.span>
                            </Text>
                          </Stack>
                        </HStack>
                      </Stack>
                    </ModalBody>

                    <ModalFooter justifyContent={'center'}>
                      <Button
                        onClick={onClose}
                        _hover={{}}
                        _active={{}}
                        _focus={{}}
                        w={'80%'}
                        borderRadius={'full'}
                        fontWeight={'bold'}
                        bgGradient="linear(180deg, #FCFF00 10%, #3FFF13 100%)"
                      >
                        BACK
                      </Button>
                    </ModalFooter>
                  </ModalContent>
                </Modal>
                <Button
                  className="button-border"
                  color={'white'}
                  bgColor={'#050826'}
                  _hover={{}}
                  borderRadius={'14px'}
                  variant={'link'}
                  w={'100%'}
                  justifyContent={'space-around'}
                >
                  <Image src={Btn1img1} w="10" />
                  <Heading
                    fontSize={'md'}
                    fontWeight="700"
                    bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                    bgClip="text"
                  >
                    BORED APE YACTH CLUB
                  </Heading>
                </Button>

                <Button
                  color={'white'}
                  bgColor={'#050826'}
                  _hover={{}}
                  borderRadius={'8px'}
                  variant={'link'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Image src={Btn1img2} w={'14'} />
                  <Heading fontSize={'md'} fontWeight="700" color={'white'}>
                    OTHERDEED
                  </Heading>
                  <Image src={win} w={'10'} alignSelf={'flex-start'} />
                </Button>
              </Stack>
            </Stack>

            <Stack w={{ base: '100%', md: '20%', lg: '20%', xl: '15%' }}>
              <Text color={'white'} fontWeight={'bold'}>
                CONFIDENCE
              </Text>
              <Select
                placeholder="7"
                bgColor={'white'}
                fontSize={'md'}
                fontWeight={'700'}
                height={'60px'}
              ></Select>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          bg={'rgba(217, 217, 217, 0.24);'}
          border={'2px solid #3FFF13'}
          borderRadius={'29px'}
          p={3}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems={'center'}
            onClick={onOpen}
          >
            <Stack w={{ base: '100%', md: '80%', lg: '80%', xl: '85%' }}>
              <HStack>
                <Image src={Info} w={'6'} />
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'}>
                  MUTANT APE YACHT CLUB VS LAZY LION
                </Text>
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <Button
                  color={'white'}
                  bgColor={'#050826'}
                  _hover={{}}
                  borderRadius={'8px'}
                  variant={'link'}
                  w={'100%'}
                  //   justifyContent={'space-around'}
                >
                  <Image src={Btn2img1} w="14" />
                  <Heading fontSize={'md'} fontWeight="700" color={'white'}>
                    MUTANT APE YACHT CLUB
                  </Heading>
                </Button>

                <Button
                  className="button-border"
                  bgColor={'#050826'}
                  _hover={{}}
                  borderRadius={'8px'}
                  variant={'link'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Image src={Btn2img2} w={'14'} />
                  <Heading
                    fontSize={'md'}
                    fontWeight="700"
                    bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                    bgClip="text"
                  >
                    LAZY LION
                  </Heading>
                  <Image src={win} w={'10'} alignSelf={'flex-start'} />
                </Button>
              </Stack>
            </Stack>

            <Stack w={{ base: '100%', md: '20%', lg: '20%', xl: '15%' }}>
              <Text color={'white'} fontWeight={'bold'}>
                CONFIDENCE
              </Text>
              <Select
                placeholder="8"
                bgColor={'white'}
                fontSize={'md'}
                fontWeight={'700'}
                height={'60px'}
              ></Select>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          bg={'rgba(217, 217, 217, 0.24);'}
          border={'2px solid #3FFF13'}
          borderRadius={'29px'}
          p={3}
        >
          <Stack
            direction={{ base: 'column', md: 'row' }}
            alignItems={'center'}
            onClick={onOpen}
          >
            <Stack w={{ base: '100%', md: '80%', lg: '80%', xl: '85%' }}>
              <HStack>
                <Image src={Info} w={'6'} />
                <Text color={'white'} fontWeight={'bold'} textAlign={'center'}>
                  AZUKI VS MOONBIRDS
                </Text>
              </HStack>
              <Stack direction={{ base: 'column', md: 'row' }}>
                <Button
                  color={'white'}
                  bgColor={'#050826'}
                  _hover={{}}
                  borderRadius={'8px'}
                  variant={'link'}
                  w={'100%'}
                  justifyContent={'space-around'}
                >
                  <Image src={Btn3img1} w="90px" />
                  <Heading fontSize={'md'} fontWeight="700" color={'white'}>
                    AZUKI
                  </Heading>
                </Button>

                <Button
                  className="button-border"
                  bgColor={'#050826'}
                  _hover={{}}
                  borderRadius={'8px'}
                  variant={'link'}
                  w={'100%'}
                  justifyContent={'space-between'}
                >
                  <Image src={Btn3img2} w={'10'} />
                  <Heading
                    fontSize={'md'}
                    fontWeight="700"
                    bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
                    bgClip="text"
                  >
                    MOONBIRDS
                  </Heading>
                  <Image src={win} w={'10'} alignSelf={'flex-start'} />
                </Button>
              </Stack>
            </Stack>

            <Stack w={{ base: '100%', md: '20%', lg: '20%', xl: '15%' }}>
              <Text color={'white'} fontWeight={'bold'}>
                CONFIDENCE
              </Text>
              <Select
                placeholder="4"
                bgColor={'white'}
                fontSize={'md'}
                fontWeight={'700'}
                height={'60px'}
              ></Select>
            </Stack>
          </Stack>
        </Stack>

        <Stack direction={'row'} justifyContent={'right'} width={'100%'}>
          <Stack width={'80%'} alignItems={'end'}>
            <Button
              onClick={() => nav('/')}
              _hover={{}}
              py={5}
              size={'sm'}
              mt={'8 !important'}
              mb={{ base: '2 !important', sm: '8 !important' }}
              w={'70%'}
              bg={'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
              borderRadius="md"
            >
              <Heading fontSize={'lg'}>Home</Heading>
            </Button>
          </Stack>
          <Stack width={{ base: '50%', md: '20%' }}>
            <Text color={'white'} fontWeight={'bold'} textAlign={'center'}>
              TOTAL SCORE
            </Text>
            <Button
              className="button-border"
              _hover={{}}
              size={'sm'}
              alignSelf={'center'}
              w={'100%'}
              bg={'white'}
              borderRadius="md"
              height={10}
            >
              <Heading fontSize={'lg'}>20</Heading>
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default NftMatchups;
