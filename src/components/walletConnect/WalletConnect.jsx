import React from 'react';
import {
  Button,
  Img,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Stack,
  Text,
  useDisclosure,
  VStack,
  Heading,
} from '@chakra-ui/react';
import meta from '../../assets/images/metamask.svg';
import coinbase from '../../assets/images/coinbase.svg';
import walletconnect from '../../assets/images/walletconnect.png';
import { useNavigate } from 'react-router-dom';

const WalletConnect = () => {
 
  const nav = useNavigate();
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = React.useState(<OverlayOne />);
  return (
    <>
      <Button
        _hover={{}}
        height={'45px'}
        bg={'linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)'}
        borderRadius="full"
        fontWeight={'bold'}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Connect Wallet
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent bgColor={'#050826'} textColor={'white'}>
          <ModalHeader>Log in or Create an account</ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <ModalBody>
            <VStack align={'center'} justify={'center'}>
              <Button
                // onClick={requestAccount}
                w={'full'}
                className="button-border"
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                variant={'link'}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect MetaMask</Text>
                  <Img src={meta} boxSize={'6'} />
                </Stack>
              </Button>

              <Button
                w={'full'}
                className="button-border"
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                variant={'link'}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect Coinbase</Text>
                  <Img src={coinbase} boxSize={'6'} />
                </Stack>
                {console.log('metamask')}
              </Button>
             

              <Button
                w={'full'}
                className="button-border"
                color={'white'}
                _hover={{
                  bg: 'linear-gradient(180deg, #FCFF00 0%, #3FFF13 100%)',
                  color: '#1A202C',
                }}
                variant={'link'}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text> Connect WalletConnect</Text>
                  <Img src={walletconnect} boxSize={'6'} />
                </Stack>
              </Button>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default WalletConnect;
