import { ComponentStyleConfig, SystemStyleObject } from '@chakra-ui/react';
type Dict = Record<string, any>;

const sizes: Record<string, SystemStyleObject> = {

};

export const Button: ComponentStyleConfig = {
  sizes,
  variants: {
    couponsButton: {
      color: '#FFFFFF',
      bg: 'grey',
      fontWeight: 600,
      fontSize: '1.125rem',
      lineHeight: '1.5rem',
      h: '3.75rem',
      _hover: {
        bg: 'gray.500'
      }
    }
  },
};
