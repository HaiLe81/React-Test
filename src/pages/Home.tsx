import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Box, Button, Center, HStack, Icon, Image, Progress, VStack } from "@chakra-ui/react";
import { Card, CardProps } from "components/Card";

import img from 'assests/images/petrol.png';
import bgRental from 'assests/images/rental-rebate.png';
import bgFoodAndBeverage from 'assests/images/food-and-beverage.png';
import lCoin from 'assests/images/L-coin.png';
import bg from 'assests/images/bg-coin-balance.jpg';
import { FooterMenu } from "components/FooterMenu";
import { BatteryIcon, CellularConnectionIcon, WifiIcon } from "assests/icons";

const dataPetrol: CardProps[] = [
  {
    urlBackground: img,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      15 Coins
    </Box>,
    content: '50% discount for every $100 top-up on your Shell Petrol Card',
  },
  {
    urlBackground: img,
    titleContent: <HStack>
      <Image src={lCoin} h='16px' w='16px' />
      <Box
        as={'p'}
        color='#696974'
        fontWeight={600}
        fontSize={{ sm: '1rem' }}
        lineHeight={{ sm: '1.5rem' }}
      >
        1,000 Coins
      </Box>
    </HStack>,
    content: '70% discount top-up on your Shell Petrol Card',
    isShowButton: true,
    buttonName: 'Insufficient coins',
  },
  {
    urlBackground: img,
    titleContent: <HStack>
      <Image src={lCoin} />
      <Box
        as={'p'}
        color='#696974'
        fontWeight={600}
        fontSize={{ sm: '1rem' }}
        lineHeight={{ sm: '1.5rem' }}
      >
        1,000 Coins
      </Box>
    </HStack>,
    content: '70% discount top-up on your Shell Petrol Card',
  },
  {
    urlBackground: img,
    titleContent: <HStack>
      <Image src={lCoin} />
      <Box
        as={'p'}
        color='#696974'
        fontWeight={600}
        fontSize={{ sm: '1rem' }}
        lineHeight={{ sm: '1.5rem' }}
      >
        1,000 Coins
      </Box>
    </HStack>,
    content: '70% discount top-up on your Shell Petrol Card',
  }
]

const dataRentalRebate: CardProps[] = [
  {
    urlBackground: bgRental,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      20 Coins
    </Box>,
    content: 'Get $20 Rental rebate',
  },
  {
    urlBackground: bgRental,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      15 Coins
    </Box>,
    content: 'Get $500 Rental rebate',
  },
  {
    urlBackground: bgRental,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      40 Coins
    </Box>,
    content: 'Get $900 Rental rebate',
  },
]

const dataFoodAndBeverage: CardProps[] = [
  {
    urlBackground: bgFoodAndBeverage,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      25 Coins
    </Box>,
    content: 'NTUC Fairprice $50 Voucher',
  },
  {
    urlBackground: bgFoodAndBeverage,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      5 Coins
    </Box>,
    content: 'Free Cold Stone Sundae at any flavour!',
  },
  {
    urlBackground: bgFoodAndBeverage,
    titleContent: <Box
      as={'p'}
      color='blueDark'
      fontSize={{ sm: '1rem' }}
      lineHeight={{ sm: '1.5rem' }}
      fontWeight={{ sm: 600 }}
    >
      100 Coins
    </Box>,
    content: 'NTUC Fairprice $50 Voucher and Free Cold Stone Sundae at any flavour!',
  },
]

export const Home = () => {
  return (
    <Box>
      <Box
        className="session-1"
        bg='grey'
        h={{ sm: '428px' }}
      >
        <VStack
          className="wrapper-session-1"
          px={{ sm: '24px' }}
          pt={{ sm: '16px' }}
          alignItems={{ sm: 'baseline' }}
          spacing={{ sm: '1rem' }}
        >
          <HStack
            w={{ sm: '100%' }}
            justifyContent={{ sm: 'space-between' }}
          >
            <Box
              as={'span'}
              fontWeight={600}
              fontSize={{ sm: '0.875rem' }}
              lineHeight={{ sm: '16.71px' }}
              color='#FFFFFF'
            >9:41</Box>
            <HStack>
              <Icon as={CellularConnectionIcon} h='32px' w='32px' cursor="pointer" />
              <Icon as={WifiIcon} h='32px' w='32px' cursor="pointer" />
              <Icon as={BatteryIcon} h='32px' w='32px' cursor="pointer" />
            </HStack>
          </HStack>
          <Center
            borderRadius='50%'
            w={{ sm: '40px' }}
            h={{ sm: '40px' }}
            bg='white'
            cursor='pointer'
          >
            <ChevronLeftIcon color='grey' />
          </Center>
          <VStack spacing={{ sm: '8px' }} alignItems={{ sm: 'baseline' }}>
            <Box
              as={'h3'}
              fontWeight={600}
              fontSize='2rem'
              lineHeight={{ sm: '2.5rem' }}
              color='#FFFFFF'
            >
              Silver Tier
            </Box>
            <Box
              as={'p'}
              color='#B5B5BE'
            >
              In Silver Tier, every $1 in rental fee paid, you get 2 coins to redeem exclusive rewards.
            </Box>
          </VStack>
        </VStack>
      </Box>
      <Box className="session-2"
        h={{ sm: '240px' }}
        pos='relative'
      >
        <Box
          className="coin-balance" pos='absolute'
          w={{ sm: 'calc(100% - 32px)' }} h={{ sm: '416px' }}
          bottom={0} left={0} right={0}
          margin='0 auto'
          border='1px solid #FAFAFB'
          boxShadow='0px 12px 18px rgba(23, 23, 37, 0.04)'
          borderRadius='8px'
          p={{ sm: '24px' }}
          backgroundImage={bg}
          backgroundSize='cover'
        >
          <VStack spacing='8px' alignItems='baseline' pb={{ sm: '33px' }}>
            <Box as={'p'} fontSize={{ sm: '0.875rem' }} fontWeight={600} lineHeight={{ sm: '1.5rem' }} color='#B5B5BE'>
              Available Coin balance
            </Box>
            <Box as={'h1'} fontSize={{ sm: '3rem' }} fontWeight={400} lineHeight={{ sm: '3.5rem' }}>
              340
            </Box>
          </VStack>
          <Progress color='blueDark' size='sm' borderRadius={10} value={80} w='100%' />
          <Box as={'p'} fontSize={{ sm: '1rem' }} lineHeight={{ sm: '1.5rem' }} fontWeight={400} color='#92929D' mt={{ sm: '2.125rem' }}>
            You have paid rental fee for $1,200. Pay more $800 to achieve Gold Tier.
          </Box>
          <HStack color='blueDark' mt={{ sm: '1rem' }}>
            <Box cursor='pointer' as={'span'}>View tier benefits</Box>
            <Icon boxSize='1rem' as={ChevronRightIcon} />
          </HStack>
          <Button mt={{ sm: '1.5rem' }} bg='#171725' w='100%' color='#FFFFFF' variant='couponsButton'>
            My Coupons
          </Button>
          <Box as={'p'} color='#B5B5BE' fontWeight={400} fontSize={{ sm: '0.875rem' }} lineHeight={{ sm: '1.25rem' }} textAlign='center' mt={{ sm: '1rem' }}>
            Updated : 02/11/2021
          </Box>
        </Box>
      </Box>

      <Box className="session-3" px={{ sm: '1.5rem' }}>
        <Box
          as={'p'}
          py={{ sm: '1.5rem' }}
          fontSize={{ sm: '1.125rem' }}
          fontWeight={600}
          lineHeight={{ sm: '1.5rem' }}
          color='grey'>
          Petrol
        </Box>
        <HStack
          className="wrapper-petrol"
          display='flex'
          overflow='auto'
          flex='none'
          flexFlow='row nowrap'
          scrollSnapType='x proximity'
          spacing='24px'
          w='100%'
          alignItems='stretch'
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {dataPetrol.length > 0 &&
            dataPetrol.map((item: CardProps, idx: number) =>
              <Card
                key={idx}
                urlBackground={item.urlBackground}
                titleContent={item.titleContent}
                content={item.content}
                isShowButton={item.isShowButton}
                buttonName={item.buttonName}
              />
            )
          }
        </HStack>
      </Box>

      <Box className="session-4" px={{ sm: '1.5rem' }}>
        <Box
          as={'p'}
          py={{ sm: '1.5rem' }}
          fontSize={{ sm: '1.125rem' }}
          fontWeight={600}
          lineHeight={{ sm: '1.5rem' }}
          color='grey'>
          Rental Rebate
        </Box>
        <HStack
          className="wrapper-rental-rebate"
          display='flex'
          overflow='auto'
          flex='none'
          flexFlow='row nowrap'
          scrollSnapType='x proximity'
          spacing='24px'
          w='100%'
          alignItems='stretch'
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {dataRentalRebate.length > 0 &&
            dataRentalRebate.map((item: CardProps, idx: number) =>
              <Card
                key={idx}
                urlBackground={item.urlBackground}
                titleContent={item.titleContent}
                content={item.content}
                isShowButton={item.isShowButton}
                buttonName={item.buttonName}
              />
            )
          }
        </HStack>
      </Box>

      <Box className="session-5" px={{ sm: '1.5rem' }} pb={{ sm: '2.5625rem' }}>
        <Box
          as={'p'}
          py={{ sm: '1.5rem' }}
          fontSize={{ sm: '1.125rem' }}
          fontWeight={600}
          lineHeight={{ sm: '1.5rem' }}
          color='grey'>
          Food and Beverage
        </Box>
        <HStack
          className="wrapper-rental-rebate"
          display='flex'
          overflow='auto'
          flex='none'
          flexFlow='row nowrap'
          scrollSnapType='x proximity'
          spacing='24px'
          w='100%'
          alignItems='stretch'
          css={{
            '::-webkit-scrollbar': {
              display: 'none'
            }
          }}
        >
          {dataFoodAndBeverage.length > 0 &&
            dataFoodAndBeverage.map((item: CardProps, idx: number) =>
              <Card
                key={idx}
                urlBackground={item.urlBackground}
                titleContent={item.titleContent}
                content={item.content}
                isShowButton={item.isShowButton}
                buttonName={item.buttonName}
              />
            )
          }
        </HStack>
      </Box>

      <FooterMenu />
    </Box>
  );
}
