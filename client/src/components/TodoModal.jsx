import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { useEffect } from 'react';
import TodoForm from './TodoForm';

const TodoModal = props => {
  const { modalTodo, modalOpen, modalTitle, setModalOpen, updateTodos } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const handleModal = () => {
      setModalOpen(false);
      onOpen();
    };
    if (modalOpen) {
      handleModal();
    }
  }, [modalOpen, setModalOpen, onOpen]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent p={2}>
        <ModalHeader>{modalTitle}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <TodoForm
            onClose={onClose}
            modalTodo={modalTodo}
            modalTitle={modalTitle}
            updateTodos={updateTodos}
          />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default TodoModal;
