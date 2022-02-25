import { Box, HStack, Icon } from "@chakra-ui/react";
import { CircleIcon, HomeIcon, HomeIndicatorIcon, NotificationIcon, ProfileIcon, WalletIcon } from "assests/icons";


export const FooterMenu = () => {
  return (
    <Box
      boxShadow='0px 12px 18px rgba(23, 23, 37, 0.04)'
      borderRadius='4px'
      boxSizing='border-box'
      borderTop='2px solid #E2E2EA'
      h={{ sm: '96px' }}
      w={{ sm: '100%' }}
      textAlign='center'
    >
      <HStack
        justifyContent='space-between'
        m={{ sm: '20px 25px 15px 25px' }}
      >
        <Icon as={HomeIcon} h='32px' w='32px' cursor="pointer" />
        <Box pos='relative'>
          <Icon as={NotificationIcon} h='32px' w='32px' cursor="pointer" />
          <Icon pos='absolute' top={0} right={0} as={CircleIcon} h='12px' w='12px' cursor="pointer" />
        </Box>
        <Icon as={WalletIcon} h='32px' w='32px' cursor="pointer" />
        <Icon as={ProfileIcon} h='32px' w='32px' cursor="pointer" />
      </HStack>
      <Box display='flex' alignItems='flex-start' justifyContent='center'>
        <Icon as={HomeIndicatorIcon} w='134px' h='5px' cursor="pointer" />
      </Box>
    </Box>
  );
}
