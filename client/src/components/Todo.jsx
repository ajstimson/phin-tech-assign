import { Button, Container, Flex, Text } from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';
import { CircleIcon, PencilIcon } from './icons';

const Todo = props => {
  //Lots to destruct here, this is using some prop drilling to get the data to the right place and I would use context to clean this up if I had more time
  const { todo, setModalOpen, setModalTitle, setModalTodo } = props;
  // Status is used to toggle done/not-done state of the todo item
  const [status, setStatus] = useState(todo.status);
  // The first of two Update functions, this one is for updating the status of the todo item
  const updateStatus = () => {
    axios
      .put(`http://localhost:8080/api/todo/${todo.id}`, {
        status: !status,
      })
      .then(res => {
        setStatus(!status);
      })
      .catch(err => {
        console.error(err);
      });
  };
  // This triggers the modal when the user clicks the edit button
  const handleEdit = () => {
    setModalOpen(true);
    setModalTitle('Edit');
    setModalTodo(todo);
  };

  return (
    <Container maxW="container.md">
      <Flex alignItems={'center'}>
        <Button variant="ghost" onClick={() => updateStatus()}>
          {!status ? (
            <CircleIcon boxSize={8} color="red" />
          ) : (
            <CheckCircleIcon boxSize={8} color="green.500" />
          )}
        </Button>
        <Text fontSize="4xl" flexGrow={1} textAlign={'left'}>
          {todo.title}{' '}
        </Text>
        <Button variant="ghost" onClick={() => handleEdit()}>
          <PencilIcon color="yellow" />
        </Button>
      </Flex>
    </Container>
  );
};

export default Todo;
