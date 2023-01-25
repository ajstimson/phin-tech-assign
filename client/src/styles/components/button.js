import { defineStyle, defineStyleConfig } from '@chakra-ui/react';
//customizes the button themes
const outline = defineStyle({
  border: '3px solid',
  borderRadius: 50,
  fontWeight: 'bold',
});

export const buttonTheme = defineStyleConfig({
  variants: { outline },
});
