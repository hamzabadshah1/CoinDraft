import { Button, Heading, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import logo from '../../assets/images/logo.png';
import contest from '../../assets/images/contest.png';
import link1 from '../../assets/images/1.png';
import link2 from '../../assets/images/2.png';
import link3 from '../../assets/images/3.png';
import link4 from '../../assets/images/4.png';

const ContestCreated = () => {
  return (
    <>
      <Stack
        bg={'#050826'}
        minH={'100vh'}
        px={{ base: '2', sm: '12' }}
        py={{ base: '12', md: '4' }}
        spacing={{ base: '6' }}
        align={'center'}
        justify={{ base: 'space-between', md: 'center' }}
      >
        {/* Contest Created Header */}
        <Stack>
          <Stack
            w={'full'}
            align={{ base: 'end', md: 'center' }}
            justify={{ base: 'space-between', md: 'end' }}
          >
            <Image
              _hover={{ cursor: 'pointer' }}
              w={{ base: '14', sm: '20', md: '24', lg: '30' }}
              src={logo}
            />
          </Stack>
          <Heading id="button-text">Contest Created!</Heading>
        </Stack>
        {/* Success Image */}
        <Image
          _hover={{ cursor: 'pointer' }}
          w={{ base: '60', md: '48' }}
          src={contest}
        />
        <Stack align={'center'}>
          {/* Invites text and Links */}
          <Stack>
            <Text textAlign={'center'} color={'white'}>
              Invite Contestants
            </Text>
            <Stack direction={'row'} spacing={'4'}>
              <Stack align={'center'}>
                <Image
                  _hover={{ cursor: 'pointer' }}
                  w={{ base: '12' }}
                  src={link1}
                />
                <Text color={'white'}>Email</Text>
              </Stack>
              <Stack align={'center'}>
                <Image
                  _hover={{ cursor: 'pointer' }}
                  w={{ base: '12' }}
                  src={link2}
                />
                <Text color={'white'}>Text</Text>
              </Stack>
              <Stack align={'center'}>
                <Image
                  _hover={{ cursor: 'pointer' }}
                  w={{ base: '12' }}
                  src={link3}
                />
                <Text color={'white'}>Link</Text>
              </Stack>
              <Stack align={'center'}>
                <Image
                  _hover={{ cursor: 'pointer' }}
                  w={{ base: '12' }}
                  src={link4}
                />
                <Text color={'white'}>More</Text>
              </Stack>
            </Stack>
          </Stack>
          {/* Done Button */}
          <Button
            _hover={{}}
            _active={{}}
            _focus={{}}
            w={{ base: '44' }}
            borderRadius={'full'}
            fontWeight={'bold'}
            bgGradient="linear(180deg, #FCFF00 10%, #3FFF13 100%)"
          >
            Done
          </Button>
        </Stack>
      </Stack>
    </>
  );
};

export default ContestCreated;
