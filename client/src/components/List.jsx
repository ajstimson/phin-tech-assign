import {
  Skeleton,
  Stack,
  Box,
  Heading,
  VStack,
  StackDivider,
  IconButton,
} from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Todo from './Todo';
import TodoModal from './TodoModal';

const List = props => {
  const { hideDone } = props;
  //Setting state for the list of todos
  const [todos, setTodos] = useState([]);
  //filtered todo list will handle the state of the hide completed items checkbox
  const [filteredTodos, setFilteredTodos] = useState([]);
  // Loading state
  const [loading, setLoading] = useState(true);
  // List title toggles between '# Items' and 'No Items'
  const [listTitle, setListTitle] = useState('Items');

  // Modal state manages opening, modal title and editing todo items within the modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState(false);
  const [modalTodo, setModalTodo] = useState(false);

  //Initial get request to populate the list of todos
  useEffect(() => {
    updateTodos();
  }, []);

  // Updates the list of todos after a todo is created, edited or deleted
  const updateTodos = () => {
    axios
      .get('http://localhost:8080/api/todo')
      .then(res => {
        if (res.status === 204) {
          setListTitle('No Items');
          setLoading(false);
          return;
        } else {
          setListTitle(`${res.data.length} Items`);
          setTodos(res.data);
          setLoading(false);
        }
      })
      .catch(err => {
        console.error(err);
      });
  };
  // Triggers modal when creating new todo
  const triggerModal = () => {
    setModalOpen(true);
    setModalTitle('Create');
  };

  // listens for hide completed items checkbox and filters the list of todos
  useEffect(() => {
    if (hideDone) {
      setFilteredTodos(todos.filter(todo => todo.status === false));
    } else {
      setFilteredTodos(todos);
    }
  }, [todos, hideDone]);

  return (
    <Box>
      <VStack direction={['column', 'row']} spacing={10}>
        <Heading as="h4"> {listTitle} </Heading>
        <VStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={4}
          align="stretch"
        >
          {loading ? (
            <Stack>
              <Skeleton height="20px" width="25vw" />
              <Skeleton height="20px" />
              <Skeleton height="20px" />
            </Stack>
          ) : (
            <>
              {filteredTodos.map(todo => (
                <Box key={todo.id} width="25vw" flexGrow={1}>
                  <Todo
                    todo={todo}
                    setModalOpen={setModalOpen}
                    setModalTitle={setModalTitle}
                    setModalTodo={setModalTodo}
                  />
                </Box>
              ))}
            </>
          )}
          <IconButton
            aria-label="Add Todo"
            icon={<AddIcon />}
            size="lg"
            colorScheme="blue"
            variant="outline"
            onClick={() => triggerModal()}
          />
        </VStack>
      </VStack>
      <TodoModal
        modalTodo={modalTodo}
        modalOpen={modalOpen}
        modalTitle={modalTitle}
        setModalOpen={setModalOpen}
        updateTodos={updateTodos}
      />
    </Box>
  );
};

export default List;
