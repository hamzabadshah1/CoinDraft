import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import plus from '../../assets/images/plus.png';
import minus from '../../assets/images/minus.png';
import { useNavigate } from 'react-router';
const Learn = () => {
  const nav = useNavigate()
  return (
    <Stack  bg={'#050826'} w={'100%'}>
      {/* body */}
      <Stack pt={'4'} alignItems={'center'}>
        <Heading className='faq-text' textAlign={'center'}>
        Our FAQ’s
        </Heading>
      </Stack>

      <Stack
        px={{ base: '0', sm: '2', md: '8' }}
        py='5'
        w={'100%'}
      >
        <Accordion allowMultiple>
          <AccordionItem border={'none'}>
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ bgColor: 'inherit' }}>
                    {isExpanded ? (
                      <Stack>
                        <Stack
                          direction={'row'}
                          spacing={{ base: '2', md: '4' }}
                          al
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Image src={minus} w="10" />
                          <Text
                            color={'white'}
                            lineHeight="1.7"
                            fontSize={{ base: 'xs', sm: 'md' }}
                          >
                            How Do I Register For A CoinDraft Account?
                          </Text>{' '}
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction={'row'}
                        spacing={{ base: '2', md: '4' }}
                        alignItems={'center'}
                      >
                        <Image src={plus} w="10" />
                        <Text
                          color={'white'}
                          lineHeight="1.7"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          How Do I Register For A CoinDraft Account?
                        </Text>{' '}
                      </Stack>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl="16">
                  <Text pl={'1.5'} color={'white'}>
                    Click Register When Opening The Game.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border={'none'} >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ bgColor: 'inherit' }}>
                    {isExpanded ? (
                      <Stack>
                        <Stack
                          direction={'row'}
                          spacing={{ base: '2', md: '4' }}
                          al
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Image src={minus} w="10" />
                          <Text
                            color={'white'}
                            lineHeight="1.7"
                            fontSize={{ base: 'xs', sm: 'md' }}
                          >
                            Can I Choose A Stablecoin As One Of My Lineup
                            Selections?
                          </Text>{' '}
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction={'row'}
                        spacing={{ base: '2', md: '4' }}
                        alignItems={'center'}
                      >
                        <Image src={plus} w="10" />
                        <Text
                          color={'white'}
                          lineHeight="1.7"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          Can I Choose A Stablecoin As One Of My Lineup
                          Selections?
                        </Text>{' '}
                      </Stack>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl="16"></AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border={'none'} >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ bgColor: 'inherit' }}>
                    {isExpanded ? (
                      <Stack>
                        <Stack
                          direction={'row'}
                          spacing={{ base: '2', md: '4' }}
                          al
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Image src={minus} w="10" />
                          <Text
                            color={'white'}
                            lineHeight="1.7"
                            fontSize={{ base: 'xs', sm: 'md' }}
                          >
                            Can I Have More Than 1 Account?
                          </Text>{' '}
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction={'row'}
                        spacing={{ base: '2', md: '4' }}
                        alignItems={'center'}
                      >
                        <Image src={plus} w="10" />
                        <Text
                          color={'white'}
                          lineHeight="1.7"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          Can I Have More Than 1 Account?
                        </Text>{' '}
                      </Stack>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl="16"></AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border={'none'} >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ bgColor: 'inherit' }}>
                    {isExpanded ? (
                      <Stack>
                        <Stack
                          direction={'row'}
                          spacing={{ base: '2', md: '4' }}
                          al
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Image src={minus} w="10" />
                          <Text
                            color={'white'}
                            lineHeight="1.7"
                            fontSize={{ base: 'xs', sm: 'md' }}
                          >
                            Can I Select The Same Token Twice In One Lineup?
                          </Text>{' '}
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction={'row'}
                        spacing={{ base: '2', md: '4' }}
                        alignItems={'center'}
                      >
                        <Image src={plus} w="10" />
                        <Text
                          color={'white'}
                          lineHeight="1.7"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          Can I Select The Same Token Twice In One Lineup?
                        </Text>{' '}
                      </Stack>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl="16"></AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border={'none'} >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ bgColor: 'inherit' }}>
                    {isExpanded ? (
                      <Stack>
                        <Stack
                          direction={'row'}
                          spacing={{ base: '2', md: '4' }}
                          al
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Image src={minus} w="10" />
                          <Text
                            color={'white'}
                            lineHeight="1.7"
                            fontSize={{ base: 'xs', sm: 'md' }}
                          >
                            When Does The Game Start? End?
                          </Text>{' '}
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction={'row'}
                        spacing={{ base: '2', md: '4' }}
                        alignItems={'center'}
                      >
                        <Image src={plus} w="10" />
                        <Text
                          color={'white'}
                          lineHeight="1.7"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          When Does The Game Start? End?
                        </Text>{' '}
                      </Stack>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl="16"></AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem border={'none'} >
            {({ isExpanded }) => (
              <>
                <h2>
                  <AccordionButton _hover={{ bgColor: 'inherit' }}>
                    {isExpanded ? (
                      <Stack>
                        <Stack
                          direction={'row'}
                          spacing={{ base: '2', md: '4' }}
                          al
                          justifyContent={'space-between'}
                          alignItems={'center'}
                        >
                          <Image src={minus} w="10" />
                          <Text
                            color={'white'}
                            lineHeight="1.7"
                            fontSize={{ base: 'xs', sm: 'md' }}
                          >
                            How Are Winners Determined?
                          </Text>{' '}
                        </Stack>
                      </Stack>
                    ) : (
                      <Stack
                        direction={'row'}
                        spacing={{ base: '2', md: '4' }}
                        alignItems={'center'}
                      >
                        <Image src={plus} w="10" />
                        <Text
                          color={'white'}
                          lineHeight="1.7"
                          fontSize={{ base: 'xs', sm: 'md' }}
                        >
                          How Are Winners Determined?
                        </Text>{' '}
                      </Stack>
                    )}
                  </AccordionButton>
                </h2>
                <AccordionPanel pl="16"></AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
         {/* home button */}
      <Button
      _hover={{}}
        onClick={() => nav('/')}
        size={'md'}
        mt={'5 !important'}
        alignSelf={'center'}
        w={{base:"50%",md:'30%',lg:'20%'}}
        bg={'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
        borderRadius="md"
      >
        <Heading fontSize={'lg'}>Home</Heading>
      </Button>
      </Stack>
      {/* footer */}
      <Stack
        px="4"
        mt={'0 !important'}
        py={{ base: '2', md: '5' }}
        w={'100%'}
        bg={'#000000'}
        alignItems="center"
        spacing={'5'}
      >
        <Heading
          textAlign={'center'}
          color={'white'}
          fontWeight="600"
          fontSize={'lg'}
        >
          {' '}
          Subscribe to Our Newsletter
        </Heading>
        <HStack spacing={'0 !important'}>
          <Input
            bg={'white'}
            color="rgba(0, 0, 0, 1)"
            fontWeight={'600'}
            _focusVisible={{}}
            placeholder="E-mail"
            borderRadius={''}
          />
          <Button
            _hover={{}}
            w={'40'}
            bg={'linear-gradient(90deg, #FCFF00 -0.5%, #3FFF13 97.65%);'}
            borderRadius={''}
          >
            <Heading fontWeight={'700'} fontSize={'md'}>
              Subscribe
            </Heading>
          </Button>
        </HStack>
        <Text className="footer-text">© All Rights Reserved</Text>
      </Stack>
    </Stack>
  );
};

export default Learn;
