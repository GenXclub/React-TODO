import React, { useState } from 'react';
import styled from '@emotion/styled';

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  background-color: ${props => props.theme.background};
  padding: 20px;
  border-radius: 5px;
  width: 400px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.text};
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.text};
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  border: none;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    opacity: 0.8;
  }
`;

function NewTodoModal({ isOpen, onClose, addTodo }) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, notes);
      setTitle('');
      setNotes('');
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>New TODO</h2>
        <form onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <TextArea
            placeholder="Notes (optional)"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <Button type="submit">Add TODO</Button>
          <Button type="button" onClick={onClose}>Cancel</Button>
        </form>
      </ModalContent>
    </ModalOverlay>
  );
}

export default NewTodoModal;