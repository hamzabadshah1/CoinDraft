import {
  Button,
  Heading,
  Image,
  Stack,
  Text,
  InputGroup,
  Input,
  InputRightAddon,
} from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import BgImg from '../../assets/images/BgImg.png';
import '../../App.css';
const Home = () => {
  return (
    <Stack w={'full'}>
      <Stack
        h={{ base: '100vh', md: '80vh' }}
        w={'100%'}
        bgImage={BgImg}
        bgRepeat={'no-repeat'}
        bgSize={'cover'}
        bgPosition={'center'}
      >
        <Stack p={{ base: 4, md: 7 }}>
          <Heading id="button-text" fontSize={'xl'}>
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
            spacing={{ md: '4', lg: '10' }}
            w={{ base: '100%', xl: '100%' }}
            px={{ base: '10%', lg: '20%' }}
            pt={10}
            pb={30}
          >
            <Button
              className="button-border"
              _hover={{}}
              borderRadius={'none'}
              variant={'link'}
              w={{ base: '100%', md: '20%' }}
            >
              <Heading color={'white'} fontSize={'md'} fontWeight="500">
                Buy $YFIC
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              _hover={{}}
              variant={'link'}
            >
              <Heading color={'white'} fontSize={'md'} fontWeight="500">
                Play CoinDraft
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              _hover={{}}
              variant={'link'}
            >
              <Heading color={'white'} fontSize={'md'} fontWeight="500">
                FAQ
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              _hover={{}}
              variant={'link'}
            >
              <Heading color={'white'} fontSize={'md'} fontWeight="500">
                $Earn
              </Heading>
            </Button>
            <Button
              w={{ base: '100%', md: '20%' }}
              className="button-border"
              _hover={{}}
              variant={'link'}
            >
              <Heading color={'white'} fontSize={'md'} fontWeight="500">
                Socials
              </Heading>
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        bgColor={'black'}
        justifyContent="center"
        alignItems={'center'}
        py={5}
        width={'100%'}
        px={5}
        mt={'0 !important'}
      >
        <Text
          color={'white'}
          fontSize={{ base: 'xl', md: '2xl' }}
          fontWeight={'700'}
        >
          Subscribe to Our Newsletter
        </Text>
        <Stack>
          <InputGroup size="sm">
            <Input
              placeholder="E-mail"
              bgColor={'white'}
              color={'black'}
              border={'none'}
            />
            <InputRightAddon
              children="Subscribe"
              color={'black'}
              _hover={{}}
              bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
              border={'none'}
              fontWeight={'700'}
              px={10}
            />
          </InputGroup>
        </Stack>
        <Stack pt={10}>
          <Text id="button-text" fontSize={'xs'}>
            &copy; All Rights Reserved
          </Text>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Home;
