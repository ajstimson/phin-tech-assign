import { Button, Heading } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';

const Header = props => {
  //Destructure props for hiding done todos
  const { setHideDone, hideDone } = props;
  return (
    <header>
      <Heading as="h1" size="3xl" py={25}>
        Todo App
      </Heading>
      <Button
        position={'absolute'}
        right={'25'}
        top={'25'}
        onClick={() => {
          setHideDone(!hideDone);
        }}
      >
        {hideDone ? <ViewOffIcon /> : <ViewIcon />}
      </Button>
    </header>
  );
};

export default Header;
