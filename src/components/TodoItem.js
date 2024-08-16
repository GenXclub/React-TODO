import React, { useState } from 'react';
import styled from '@emotion/styled';

const Item = styled.li`
  background-color: rgba(0, 255, 255, 0.1);
  border: 1px solid #0ff;
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 10px #0ff;
`;

const Title = styled.h3`
  margin: 0;
  color: #0ff;
  text-shadow: 0 0 5px #0ff;
`;

const Notes = styled.p`
  margin: 0.5rem 0;
  color: #fff;
`;

const Button = styled.button`
  background-color: transparent;
  border: 1px solid #0ff;
  color: #0ff;
  padding: 0.5rem 1rem;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0ff;
    color: #000;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 1rem;
`;

function TodoItem({ todo, toggleTodo, editTodo, deleteTodo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(todo.title);
  const [editedNotes, setEditedNotes] = useState(todo.notes);

  const handleEdit = () => {
    editTodo(todo.id, editedTitle, editedNotes);
    setIsEditing(false);
  };

  return (
    <Item>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedNotes}
            onChange={(e) => setEditedNotes(e.target.value)}
          />
          <ButtonGroup>
            <Button onClick={handleEdit}>Save</Button>
            <Button onClick={() => setIsEditing(false)}>Cancel</Button>
          </ButtonGroup>
        </>
      ) : (
        <>
          <Title style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.title}
          </Title>
          <Notes>{todo.notes}</Notes>
          <ButtonGroup>
            <Button onClick={() => toggleTodo(todo.id)}>
              {todo.completed ? 'Undo' : 'Complete'}
            </Button>
            <Button onClick={() => setIsEditing(true)}>Edit</Button>
            <Button onClick={() => deleteTodo(todo.id)}>Delete</Button>
          </ButtonGroup>
        </>
      )}
    </Item>
  );
}

export default TodoItem;