import React from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Stack,
    Text,
} from '@chakra-ui/react'

import '../../App.css'

const LeaderboardTable = () => {
    return (
        <>
            <Stack direction={'row'} color={'black'} className="button-border" p={'0 !important'} bgColor={'white'} borderRadius={'lg'}>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={{ base: '1.5', sm: '1' }} align={'center'}>Rank</Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'4'} align={'center'}>Player Name</Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'3'} align={'center'}>Gains</Text>
                <Text fontWeight={'bold'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'3'} align={'center'}>Community</Text>
            </Stack>
            <Stack direction={'row'} color={'black'} className="button-border" p={'0 !important'} bgColor={'white'} borderRadius={'lg'}>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={{ base: '1.5', sm: '1' }} align={'center'}>1.</Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'4'} align={'center'}></Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'3'} align={'center'}></Text>
                <Text fontWeight={'bold'} flex={'3'} align={'center'}></Text>
            </Stack>
            <Stack direction={'row'} color={'black'} className="button-border" p={'0 !important'} bgColor={'white'} borderRadius={'lg'}>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={{ base: '1.5', sm: '1' }} align={'center'}>2.</Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'4'} align={'center'}></Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'3'} align={'center'}></Text>
                <Text fontWeight={'bold'} flex={'3'} align={'center'}></Text>
            </Stack>
            <Stack direction={'row'} color={'black'} className="button-border" p={'0 !important'} bgColor={'white'} borderRadius={'lg'}>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={{ base: '1.5', sm: '1' }} align={'center'}>3.</Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'4'} align={'center'}></Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'3'} align={'center'}></Text>
                <Text fontWeight={'bold'} flex={'3'} align={'center'}></Text>
            </Stack>
            <Stack direction={'row'} color={'black'} className="button-border" p={'0 !important'} bgColor={'white'} borderRadius={'lg'}>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={{ base: '1.5', sm: '1' }} align={'center'}>4.</Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'4'} align={'center'}></Text>
                <Text fontWeight={'bold'} borderRight={'1px solid black'} fontSize={{ base: '0.7em', md: 'lg' }} flex={'3'} align={'center'}></Text>
                <Text fontWeight={'bold'} flex={'3'} align={'center'}></Text>
            </Stack>
        </>
    )
}

export default LeaderboardTable