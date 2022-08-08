import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  Input,
  HStack,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import BgImg from '../../assets/images/BgImg.png';
import '../../App.css';
import {useNavigate} from 'react-router-dom'
const Home = () => {
  const nav = useNavigate()
  return (
    <Stack w={'full'}>
      <Stack
        h={{ base: '100vh', md: '75vh' }}
        w={'100%'}
        bgImage={BgImg}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        bgPosition={'center'}
      >
        <Stack p={{ base: 4, md: 7 }}>
          <Heading
            _hover={{ cursor: 'pointer' }}
            id="button-text"
            fontSize={'xl'}
          >
            CoinDraft
          </Heading>
        </Stack>
        <Stack justifyContent="center" alignItems={'center'}>
          <Stack textAlign={'center'} alignItems="center" mt={'-50px'}>
            <Image
              _hover={{ cursor: 'pointer' }}
              w={{ base: '20', md: '28', lg: '40' }}
              src={logo}
            />
            <Stack>
              <Heading
                color={'white'}
                fontSize={{ base: 'xl', md: '4xl', lg: '6xl' }}
              >
                The Future Of Defi Fantasy
              </Heading>
            </Stack>
          </Stack>
          <Stack
            direction={{ base: 'column', md: 'row' }}
            spacing={{ base: '4', lg: '10' }}
            w={{ base: '100%', xl: '100%' }}
            px={{ base: '10%', lg: '20%' }}
            pt={10}
            pb={30}
          >
            <Button
            onClick={()=>nav('/trending-coins')}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              borderRadius={'none'}
              variant={'link'}
              w={{ base: '100%', md: '20%' }}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Buy $YFIC
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Play CoinDraft
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
              onClick={()=>nav('/faq')}
            >
              <Heading fontSize={'md'} fontWeight="500">
                FAQ
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                $Earn
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              color={'white'}
              _hover={{
                bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                color: '#1A202C',
              }}
              variant={'link'}
            >
              <Heading fontSize={'md'} fontWeight="500">
                Socials
              </Heading>
            </Button>
          </Stack>
        </Stack>
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

export default Home;
