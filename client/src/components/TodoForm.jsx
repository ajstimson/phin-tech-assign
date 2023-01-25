import {
  Box,
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Heading,
  Input,
  Divider,
  IconButton,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import axios from 'axios';

const TodoForm = props => {
  //More prop destructuring
  const { onClose, modalTodo, modalTitle, updateTodos } = props;
  //Creating state for the form values
  const [values, setValues] = useState({
    title: '',
    content: '',
    status: '',
  });
  //Creating state for the form errors
  const [errors, setErrors] = useState({});
  //Creating state for the form submission to prevent multiple submissions
  const [isSubmitting, setIsSubmitting] = useState(false);
  //Creating state for the form submission success to trigger the modal close
  const [isSuccess, setIsSuccess] = useState(false);

  // updates state when form values change
  const onChange = e => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    setErrors({});
  };
  // handles succesful form submission and closes modal after 800ms
  const handleClose = () => {
    setIsSuccess(true);
    updateTodos();
    setTimeout(() => {
      onClose();
    }, 800);
  };

  // handles submission of new todos
  const postTodo = () => {
    axios
      .post('http://localhost:8080/api/todo', {
        ...values,
        status: false,
        created: new Date(),
      })
      .then(res => {
        // set success, set timeout to close modal
        handleClose();
      })
      .catch(err => {
        console.error(err);
      });
  };
  // handles submission of edited todos
  const putTodo = () => {
    axios
      .put(`http://localhost:8080/api/todo/${modalTodo.id}`, {
        ...values,
        title: values.title,
      })
      .then(res => {
        handleClose();
      })
      .catch(err => {
        console.error(err);
      });
  };
  // handles form submission and validation
  const handleSubmit = e => {
    e.preventDefault();

    if (values.title === '') {
      setErrors({ title: 'Todo is required' });
      return;
    }
    if (modalTitle === 'Create') {
      postTodo();
    } else {
      putTodo();
    }
  };
  // handles deletion of todos
  const handleDelete = () => {
    axios
      .delete(`http://localhost:8080/api/todo/${modalTodo.id}`)
      .then(res => {
        handleClose();
      })
      .catch(err => {
        console.error(err);
      });
  };

  return (
    <Box p={2}>
      <form onSubmit={e => handleSubmit(e)}>
        <Flex direction="column" alignItems="flex-start">
          <FormControl id="title" isInvalid={errors.title}>
            <FormLabel>Todo:</FormLabel>
            <Input
              type="text"
              placeholder="Title"
              name="title"
              defaultValue={modalTodo.title && modalTodo.title}
              onChange={e => onChange(e)}
            />
            {errors.title && (
              <FormErrorMessage>{errors.title}</FormErrorMessage>
            )}
          </FormControl>
          <Center>
            <Divider m={3} visibility="hidden" />
          </Center>
          {isSuccess ? (
            <p>{modalTitle === 'Create' ? 'Good Luck!' : 'Updated'}</p>
          ) : (
            <Flex flexGrow={1} alignItems={'center'} width="100%">
              <Button
                type="submit"
                colorScheme="blue"
                onClick={() => setIsSubmitting(true)}
                disabled={isSubmitting || Object.keys(errors).length > 0}
              >
                Submit
              </Button>

              {modalTitle === 'Edit' && (
                <>
                  <Box px="5" flexGrow={1} textAlign={'center'}>
                    <Heading size="md"> - or -</Heading>
                  </Box>
                  <IconButton
                    aria-label="Delete Todo"
                    size="lg"
                    colorScheme="red"
                    variant="outline"
                    icon={<DeleteIcon />}
                    onClick={() => handleDelete()}
                  />
                </>
              )}
            </Flex>
          )}
        </Flex>
      </form>
    </Box>
  );
};

export default TodoForm;
