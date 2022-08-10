import {
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
  chakra,
} from '@chakra-ui/react';
import React from 'react';
import '../../App.css';
import logo from '../../assets/images/logo.png';
import { useNavigate } from 'react-router-dom';

const ContestLobby = () => {
  const nav = useNavigate();
  return (
    <>
      <Stack
        bg={'#050826'}
        minH={'100vh'}
        px={{ base: '2', sm: '12' }}
        py={{ base: '4', md: '10' }}
        spacing={{ base: '6', md: '12' }}
        justify={{ base: 'space-between', md: 'center' }}
        align={'center'}
      >
        {/* Heading Container */}
        <Stack
          direction={{ base: 'row', md: 'column' }}
          w={'full'}
          align={{ base: 'center' }}
          justify={{ base: 'space-between', md: 'inherit' }}
        >
          <Heading
            fontSize={{ base: '3xl', sm: '5xl', md: '5xl' }}
            bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
            bgClip="text"
          >
            1v1 Lobby
          </Heading>
          <Image
            display={{ base: 'inherit', md: 'none' }}
            _hover={{ cursor: 'pointer' }}
            w={{ base: '14', sm: '20', md: '28', lg: '40' }}
            src={logo}
          />
        </Stack>
        {/* Content Container */}
        <Stack direction={'row'} h={{ base: '60vh', lg: '55vh' }} w={'full'}>
          {/* Sidebar Button Container */}
          <Stack
            display={{ base: 'none', md: 'inherit' }}
            align={'center'}
            justify={'space-between'}
          >
            <Stack spacing={'3'}>
              <Button
                onClick={() => nav('/')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  Home
                </Heading>
              </Button>
              <Button
                onClick={() => nav('/drafts')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  MY Lineup
                </Heading>
              </Button>
              <Button
                onClick={() => nav('/leaderboard')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  Leaderboard
                </Heading>
              </Button>
              <Button
                onClick={() => nav('/prize-payouts')}
                w={'36'}
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                className="button-border"
                variant={'link'}
              >
                <Heading fontSize={'md'} fontWeight="700">
                  Prizes
                </Heading>
              </Button>
            </Stack>
            <VStack>
              <Image
                onClick={() => nav('/')}
                _hover={{ cursor: 'pointer' }}
                w={{ base: '14', sm: '32', md: '32', lg: '24' }}
                src={logo}
              />
              <Text color={'white'} fontStyle={'bold'}>
                Season-Long League
              </Text>
            </VStack>
          </Stack>
          {/* Table Container */}
          <Stack
            mx={{ base: '0 !important', md: '4 !important' }}
            flex={'1'}
            justify={'end'}
          >
            <Button
              className="button-border"
              onClick={() => nav('/createcontest')}
              _hover={{}}
              _focus={{}}
              _active={{}}
              bgColor={'#25294A'}
              color={'white'}
            >
              Create a 1v1 contest
            </Button>
            <Stack
              className="example"
              direction={{ base: 'column', lg: 'row' }}
              spacing={'4'}
              overflow={'auto'}
              h={'full'}
              borderRadius={'lg'}
            >
              {/* Card Container */}
              <Stack
                direction={'row'}
                color={'#96A9DE'}
                p={'4'}
                bgColor={'#25294A'}
                borderRadius={'lg'}
                w={{ base: 'full', lg: '50%' }}
                justify={'space-between'}
              >
                {/* Left Side Content */}
                <Stack
                  className="test"
                  w={{ base: '50%', md: '50%' }}
                  h={'full'}
                >
                  <Text fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}>
                    Contest Id: #123456789
                  </Text>
                  <Stack fontWeight={'bold'} spacing={'0'} justify={'end'}>
                    <Text
                      color={'white'}
                      fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}
                    >
                      <chakra.span id="button-text">Mode:</chakra.span>1v1{' '}
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}
                    >
                      <chakra.span id="button-text">Players:</chakra.span>1/2{' '}
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}
                    >
                      <chakra.span id="button-text">Buy-In fee:</chakra.span>N/A{' '}
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}
                    >
                      <chakra.span id="button-text">
                        Buy-In Currency:
                      </chakra.span>
                      N/A{' '}
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}
                    >
                      <chakra.span id="button-text">Game Duration:</chakra.span>
                      12Hours{' '}
                    </Text>
                    <Text
                      color={'white'}
                      fontSize={{ base: 'xs', sm: 'md', md: 'xl' }}
                    >
                      <chakra.span id="button-text">Payout Scale:</chakra.span>
                      N/A
                    </Text>
                  </Stack>
                </Stack>
                {/* Right Side Content */}
                <Stack
                  w={{ base: '40%', md: '50%' }}
                  justify={{ base: 'start', md: 'space-between' }}
                >
                  <Stack>
                    <Text color={'white'} fontSize={{ base: 'xs', sm: 'md' }}>
                      Players Registered
                    </Text>
                    <Stack
                      bgColor={'#050826'}
                      h={'20'}
                      borderRadius={'lg'}
                      px={'2'}
                      py={'1'}
                      overflow={'auto'}
                      className="example"
                    >
                      <Text
                        id="button-text"
                        fontWeight={'bold'}
                        fontSize={{ base: 'xs', md: 'lg' }}
                      >
                        1. Asad
                      </Text>
                      <Text
                        id="button-text"
                        fontWeight={'bold'}
                        fontSize={{ base: 'xs', md: 'lg' }}
                      >
                        2. Sufyan
                      </Text>
                      <Text
                        id="button-text"
                        fontWeight={'bold'}
                        fontSize={{ base: 'xs', md: 'lg' }}
                      >
                        3. Huma
                      </Text>
                    </Stack>
                  </Stack>
                  <Button
                  onClick={()=>nav('/login')}
                    _hover={{}}
                    _focus={{}}
                    _active={{}}
                    bgGradient="linear(180deg, #FCFF00 10%, #3FFF13 100%)"
                    color={'black'}
                    borderRadius={'full'}
                    size={{ base: 'sm', md: 'md' }}
                  >
                    Register
                  </Button>
                </Stack>
              </Stack>
            </Stack>
            {/* Additional Stack */}
            <Stack
              Stack
              w={'36'}
              display={{ base: 'none', md: 'inherit' }}
              align={'center'}
            ></Stack>
          </Stack>
        </Stack>
        {/* Home Mibile Screen Button */}
        <Button
          _hover={{}}
          _focus={{}}
          _active={{}}
          w={'40vw'}
          display={{ base: 'inherit', md: 'none' }}
          bgGradient="linear(180deg, #FCFF00 10%, #3FFF13 100%)"
        >
          {' '}
          Home
        </Button>
      </Stack>
    </>
  );
};

export default ContestLobby;
