import { extendTheme } from '@chakra-ui/react';
import { buttonTheme } from './components/button';
// customizes the theme to force dark mode and set fonts
const phinTheme = extendTheme({
  initialColorMode: 'dark',
  useSystemColorMode: false,
  components: { Button: buttonTheme },
  fonts: {
    heading: 'Montserrat',
    body: 'Poppins',
  },
});

export default phinTheme;
