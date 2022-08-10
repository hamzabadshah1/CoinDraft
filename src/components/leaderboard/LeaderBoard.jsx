import {
  Button,
  Heading,
  Image,
  Img,
  Menu,
  MenuButton,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import down from '../../assets/images/down.svg';
import '../../App.css';
import LeaderboardTable from './LeaderboardTable';
import { useNavigate } from 'react-router-dom';

const LeaderBoard = () => {
  const nav = useNavigate();
  return (
    <>
      <Stack
        bg={'#050826'}
        minH={'100vh'}
        px={{ base: '2', sm: '12' }}
        py={'10'}
        spacing={'6'}
      >
        {/* Leaderboard heading Logo and Button */}
        <Stack direction={'row'} align={'end'}>
          <Stack spacing={'3'} display={{ base: 'none', md: 'inherit' }}>
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
            <Button
              w={'36'}
              onClick={() => nav('/gameschedule')}
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              className="button-border"
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="700">
                Game Schedule
              </Heading>
            </Button>
          </Stack>
          <Stack
            align={'center'}
            flex={'1'}
            direction={{ base: 'row', md: 'column' }}
            justify={{ base: 'space-between', md: 'inherit' }}
          >
            <Heading
              as={'h1'}
              fontSize={{ base: '2xl', sm: '5xl', md: '5xl' }}
              bgGradient="linear(180deg, #FCFF00 40%, #3FFF13 100%)"
              bgClip="text"
            >
              Leaderboard
            </Heading>
            <Image
            onClick={() => nav('/')}
              _hover={{ cursor: 'pointer' }}
              w={{ base: '14', sm: '20', md: '28', lg: '40' }}
              src={logo}
            />
          </Stack>
          <Stack w={'36'} display={{ base: 'none', md: 'inherit' }} />
        </Stack>
        {/* League Friends Tournament bar */}
        <Stack
          bgGradient={'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)'}
          direction={'row'}
          justify={'space-between'}
          px={{ md: '16' }}
          borderRadius={'lg'}
        >
          <Menu>
            <MenuButton
              as={Button}
              _hover={{}}
              _focus={{}}
              _active={{}}
              variant={'ghost'}
            >
              <Stack direction={'row'} align={'center'} spacing={'1'}>
                <Text
                  fontSize={{ base: '0.8em', md: 'lg' }}
                  fontWeight={'bold'}
                >
                  League
                </Text>
                <Img src={down} w={{ base: '3', sm: '4' }} />
              </Stack>
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              _hover={{}}
              _focus={{}}
              _active={{}}
              variant={'ghost'}
            >
              <Stack direction={'row'} align={'center'} spacing={'1'}>
                <Text
                  fontSize={{ base: '0.8em', md: 'lg' }}
                  fontWeight={'bold'}
                >
                  Friends
                </Text>
                <Img src={down} w={{ base: '3', sm: '4' }} />
              </Stack>
            </MenuButton>
          </Menu>
          <Menu>
            <MenuButton
              as={Button}
              _hover={{}}
              _focus={{}}
              _active={{}}
              variant={'ghost'}
            >
              <Stack direction={'row'} align={'center'} spacing={'1'}>
                <Text
                  fontSize={{ base: '0.8em', md: 'lg' }}
                  fontWeight={'bold'}
                >
                  Tournament
                </Text>
                <Img src={down} w={{ base: '3', sm: '4' }} />
              </Stack>
            </MenuButton>
          </Menu>
        </Stack>
        {/* Table Container */}
        <Stack
          border={'1px solid white'}
          borderRadius={'lg'}
          p={'4'}
          bgColor={'rgba(255, 255, 255, 0.2)'}
        >
          <LeaderboardTable />
        </Stack>
      </Stack>
    </>
  );
};

export default LeaderBoard;
