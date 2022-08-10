import React from 'react';
import {
  Button,
  HStack,
  Img,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Spacer,
  Stack,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';
import meta from '../../assets/images/metamask.svg';
import coinbase from '../../assets/images/coinbase.svg';
import walletconnect from '../../assets/images/walletconnect.png';
import { useNavigate } from 'react-router-dom';

const WalletConnect = () => {
    async function requestAccount() {
        console.log('request account');
        if (window.ethereum) {
          console.log('account already exists!');
          try {
            await window.ethereum.request({
              method: 'eth_requestAccounts',
            });
            // setwalletAddress(account[0])
          } catch (error) {
            console.log('error in connceting');
          }
        } else {
          console.log('not exists');
        }
    
      }
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
        height={"45px"}
        bg={"linear-gradient(90deg, #FCFF00 0%, #3FFF13 100%)"}
        borderRadius="full"
        fontWeight={"bold"}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Connect Wallet
      </Button>
      <Modal isCentered isOpen={isOpen} onClose={onClose} size={'xl'}>
        {overlay}
        <ModalContent bgColor={'#001529'} textColor={'white'}>
          <ModalHeader>Log in or Create an account</ModalHeader>
          <ModalCloseButton
            _focus={{
              boxShadow: 'none',
            }}
          />
          <ModalBody>
            <VStack align={'center'} justify={'center'}>
              <Button
                onClick={requestAccount}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
                py={5}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect MetaMask</Text>
                  <Img src={meta} boxSize={'6'} />
                </Stack>
              </Button>

              <Button
                // onClick={connectWithCoinBase}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
              >
                <Stack direction={'row'} align={'center'}>
                  <Text>Connect Coinbase</Text>
                  <Img src={coinbase} boxSize={'6'} />
                </Stack>
                {console.log('metamask')}
              </Button>

              <Button
                // onClick={connectWithWalletConnect}
                w={'full'}
                bgColor={'#205375'}
                _hover={{ color: '#001529' }}
                _focus={{ boxShadow: 'none' }}
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
