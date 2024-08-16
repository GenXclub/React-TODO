import React, { useState } from 'react';
import styled from '@emotion/styled';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  background-color: rgba(0, 255, 255, 0.1);
  border: 1px solid #0ff;
  border-radius: 5px;
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #0ff;
  }
`;

const TextArea = styled.textarea`
  background-color: rgba(0, 255, 255, 0.1);
  border: 1px solid #0ff;
  border-radius: 5px;
  color: #fff;
  padding: 0.5rem;
  margin-bottom: 1rem;
  resize: vertical;

  &:focus {
    outline: none;
    box-shadow: 0 0 10px #0ff;
  }
`;

const Button = styled.button`
  background-color: #0ff;
  border: none;
  border-radius: 5px;
  color: #000;
  padding: 0.5rem 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #00cccc;
  }
`;

function TodoForm({ addTodo }) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      addTodo(title, notes);
      setTitle('');
      setNotes('');
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Enter todo title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <TextArea
        placeholder="Enter notes (optional)"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      />
      <Button type="submit">Add Todo</Button>
    </Form>
  );
}

export default TodoForm;