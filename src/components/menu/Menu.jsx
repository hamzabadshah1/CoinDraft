import React from 'react';
import {
  HStack,
  Image,
  Stack,
  Text,
  Heading,
  Spacer,
  VStack,
} from '@chakra-ui/react';
import logo from '../../assets/images/logo.png';
import icon1 from '../../assets/images/icon8.png';
import icon2 from '../../assets/images/icon1.png';
import icon3 from '../../assets/images/icon2.png';
import icon4 from '../../assets/images/icon3.png';
import icon5 from '../../assets/images/icon4.png';
import icon6 from '../../assets/images/icon5.png';
import icon7 from '../../assets/images/icon6.png';
import icon8 from '../../assets/images/icon7.png';
import icon9 from '../../assets/images/icon7.png';
import icon10 from '../../assets/images/icon5-1.png';
import {useNavigate} from 'react-router-dom'
const Menu = () => {
  const nav = useNavigate()
  return (
    <Stack
      w={'full'}
      minH={'100vh'}
      bg={'#050826'}
      justifyContent="center"
      alignItems={'center'}
      gap={2}
    >
      <Stack
        spacing={'3'}
        px={{ base: '4', md: '0' }}
        w={{ base: '100%', md: '60%', lg: '40%' }}
        pt={5}
      >
        <HStack>
          <Heading
            alignItems={'center'}
            minW={'fit-content'}
            fontSize={{ base: 'xl', md: '4xl' }}
            className="gradient-color"
          >
            Menu
          </Heading>
          <Spacer />
          <Stack>
            <Image
              _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
              w={'14'}
              src={logo}
            />
          </Stack>
        </HStack>

        <Stack bgColor={'#25294A'} borderRadius={'15px'} p={4}>
          <HStack>
            <Stack>
              <Text fontSize={'md'} color={'white'} fontWeight={'700'}>
                Refer Your Friends!
              </Text>
              <Text fontSize={'sm'} color={'white'}>
                Refer Your Friends For Big Bonuses
              </Text>
            </Stack>
            <Spacer />
            <Stack>
              <Text fontSize={'md'} color={'white'} fontWeight={'700'}>
                Comming Soon!
              </Text>
            </Stack>
          </HStack>
        </Stack>
      </Stack>

      <Stack
        direction={'column'}
        gap={4}
        px={{ base: '4', md: '0' }}
        w={{ base: '100%', md: '60%', lg: '40%' }}
        py={5}
      >
        {/* row 1 */}
        <Stack
          w={'100%'}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          alignItems="center"
        >
          <Stack
          onClick={()=>nav('/profile')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon1}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              My Profile
            </Text>
          </Stack>
          <Stack
          onClick={()=>nav('/drafts')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon2}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />

            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Draft Lineup
            </Text>
          </Stack>
          <Stack
          onClick={()=>nav('/contest')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon3}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              1v1 Lobby
            </Text>
          </Stack>
        </Stack>
        {/* row 2 */}
        <Stack
          w={'100%'}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          alignItems="center"
        >
          <Stack
          onClick={()=>nav('/leaderboard')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon4}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Leaderboard
            </Text>
          </Stack>
          <Stack
          onClick={()=>nav('/prize-payouts')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon5}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Prizes
            </Text>
          </Stack>
          <Stack
          onClick={()=>nav('/gameschedule')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon6}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            >
              <Image src={icon10} w={'12'} />
            </Stack>
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Game Schedule
            </Text>
          </Stack>
        </Stack>
        {/* row 3 */}
        <Stack
          w={'100%'}
          direction={{ base: 'column', md: 'row' }}
          gap={4}
          alignItems="center"
        >
          <Stack
          onClick={()=>nav('/login')}
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon1}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Log Out
            </Text>
          </Stack>
          <Stack
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon7}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Settings
            </Text>
          </Stack>
          <Stack
            _hover={{ cursor: 'pointer', bgColor: '#201c1c78' }}
            w={{ base: '60%', sm: '40%', md: '30%' }}
            minH={'120px'}
            alignItems={'center'}
            justifyContent="center"
            bgColor={'#25294A'}
            borderRadius={'xl'}
          >
            <Stack
              bgImage={icon9}
              w={'12'}
              h={'12'}
              bgSize={'cover'}
              bgPosition={'center'}
            />
            <Text color={'#96A9DE'} fontSize={'sm'} textAlign={'center'}>
              Contact
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Menu;
