import { extendTheme } from '@chakra-ui/react';

import { foundations } from './foundations';
import { components } from './components';
import { styles } from './styles';

export const overrides = extendTheme({
  ...foundations,
  styles,
  components,
});
