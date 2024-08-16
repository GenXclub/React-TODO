import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';

const MainContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
`;

const TodoTitle = styled.input`
  font-size: 24px;
  margin-bottom: 20px;
  width: 100%;
  padding: 10px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.text};
`;

const TodoNotes = styled.textarea`
  width: 100%;
  height: 200px;
  padding: 10px;
  margin-bottom: 20px;
  background-color: transparent;
  border: 1px solid ${props => props.theme.primary};
  color: ${props => props.theme.text};
`;

const SaveButton = styled.button`
  padding: 10px 20px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

function MainContent({ selectedTodo, updateTodo, deleteTodo }) {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [isEdited, setIsEdited] = useState(false);

  useEffect(() => {
    if (selectedTodo) {
      setTitle(selectedTodo.title);
      setNotes(selectedTodo.notes);
      setIsEdited(false);
    } else {
      setTitle('');
      setNotes('');
      setIsEdited(false);
    }
  }, [selectedTodo]);

  const handleSave = () => {
    if (selectedTodo) {
      updateTodo(selectedTodo.id, title, notes);
      setIsEdited(false);
    }
  };

  if (!selectedTodo) {
    return <MainContainer>Select a TODO from the sidebar</MainContainer>;
  }

  return (
    <MainContainer>
      <TodoTitle
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setIsEdited(true);
        }}
      />
      <TodoNotes
        value={notes}
        onChange={(e) => {
          setNotes(e.target.value);
          setIsEdited(true);
        }}
      />
      {isEdited && <SaveButton onClick={handleSave}>Save</SaveButton>}
    </MainContainer>
  );
}

export default MainContent;