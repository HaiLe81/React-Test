import { createBreakpoints } from '@chakra-ui/theme-tools';

export const breakpoints = createBreakpoints({
  base: '0px', // mobile
  sm: '360px',
  md: '768px', // tablet
  lg: '1280px', // desktop
  xl: '1366px',
  lxl: '1440px',
  '2xl': '1920px', //'1920px'
});

export const createResponsiveStyle = (data: {
  base?: any;
  md?: any;
  lg?: any;
  xl?: any;
  lxl?: any;
  '2xl'?: any;
}) => {
  return data;
};
