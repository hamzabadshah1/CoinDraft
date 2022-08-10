import { Box, Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
// import "./Drafts.css";
import { useNavigate } from 'react-router-dom';
const TrendingCoins = () => {
  const nav = useNavigate();
  return (
    <Stack minH={'100vh'} w={'100%'} bg={'#050826'}>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between"
      >
        {/* home buttons */}
        <Stack
          w={{ base: '100%', xl: '40%' }}
          pt={'12'}
          pb="4"
          px={{ base: 10, md: 5, lg: 20 }}
        >
          {/* buttons */}
          <Stack spacing={'4'} w={{ base: '100%', md: '40%', lg: '35%' }}>
            <Button
              onClick={() => nav('/profile')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                My Profile
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/drafts')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                My Lineup
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/leaderboard')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Leaderboard
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/prize-payouts')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Prizes
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/gameschedule')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Game Schedule
              </Heading>
            </Button>
            <Button
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Settings
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/login')}
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              className="button-border"
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Register
              </Heading>
            </Button>
            <Button
              onClick={() => nav('/login')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Login
              </Heading>
            </Button>
          </Stack>
        </Stack>
        {/* lineup */}
        <Stack
          w={{ base: '100%', xl: '60%' }}
          direction={{ base: 'column', md: 'row' }}
          px={{ base: 10, md: 5, lg: 20 }}
          py={'8'}
          justifyContent="space-between"
        >
          {/* timer */}
          <Stack w={{ base: '100%', xl: '25%' }} justifyContent={'flex-end'}>
            <Text
              textAlign={'center'}
              fontSize={'md'}
              fontWeight="600"
              color={'white'}
            >
              Current Game Ends In
            </Text>
            {/* countdown timer */}
            <Stack
              color={'white'}
              spacing={'3'}
              justifyContent={'center'}
              direction={'row'}
            >
              <Stack>
                <div className="countdowntimer-box"></div>
                <h1>Days</h1>
              </Stack>
              <Stack>
                <div className="countdowntimer-box"></div>
                <h1>Hours</h1>
              </Stack>
              <Stack>
                <div className="countdowntimer-box"></div>
                <h1>Minutes</h1>
              </Stack>
            </Stack>
          </Stack>
          {/*  Trending Coins */}
          <Stack
            spacing={'4'}
            alignItems="center"
            w={{ base: '100%', md: '100%', xl: '50%' }}
          >
            <Stack
              border={'2px solid rgba(255, 255, 255, 1)'}
              _hover={{ cursor: 'pointer' }}
              borderRadius={'lg'}
              bg="rgba(217, 217, 217, 0.24);"
              alignItems={'center'}
              width={{ base: '100%', xl: '80%' }}
              height={'400px'}
            >
              <Heading
                py={2}
                alignItems={'center'}
                minW={'fit-content'}
                fontSize={{ base: 'xl', xl: '3xl' }}
                className="gradient-color"
              >
                Trending Coins
              </Heading>
            </Stack>
            <Stack width={{ base: '100%', xl: '80%' }}>
              <Button
                _hover={{}}
                fontSize={{ base: 'xl', xl: '2xl' }}
                color={'white'}
                borderRadius={'full'}
                bgColor={'#19B11D'}
                fontWeight={'bold'}
              >
                Buy $YFIC
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default TrendingCoins;
