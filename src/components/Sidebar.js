import React from 'react';
import styled from '@emotion/styled';

const SidebarContainer = styled.div`
  width: 250px;
  background-color: ${props => props.theme.background};
  border-right: 1px solid ${props => props.theme.primary};
  padding: 20px;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

const TodoList = styled.ul`
  list-style-type: none;
  padding: 0;
  flex-grow: 1;
  overflow-y: auto;
`;

const TodoItem = styled.li`
  padding: 10px;
  cursor: pointer;
  background-color: ${props => props.isSelected ? props.theme.primary : 'transparent'};
  color: ${props => props.isSelected ? props.theme.background : props.theme.text};
  margin-bottom: 5px;
  border-radius: 5px;

  &:hover {
    background-color: ${props => props.theme.primary}33;
  }
`;

const NewTodoButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;

  &:hover {
    opacity: 0.8;
  }
`;

const ThemeToggle = styled.button`
  width: 100%;
  padding: 10px;
  background-color: ${props => props.theme.primary};
  color: ${props => props.theme.background};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: auto;

  &:hover {
    opacity: 0.8;
  }
`;

function Sidebar({ todos, selectedTodo, setSelectedTodo, openNewTodoModal, toggleTheme, currentTheme, neonTheme }) {
  return (
    <SidebarContainer>
      <NewTodoButton onClick={openNewTodoModal}>+ New TODO</NewTodoButton>
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            isSelected={selectedTodo && selectedTodo.id === todo.id}
            onClick={() => setSelectedTodo(todo)}
          >
            {todo.title}
          </TodoItem>
        ))}
      </TodoList>
      <ThemeToggle onClick={toggleTheme}>
        {currentTheme === neonTheme ? 'Batman Theme' : 'Neon Theme'}
      </ThemeToggle>
    </SidebarContainer>
  );
}

export default Sidebar;