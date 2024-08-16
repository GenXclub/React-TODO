import React from 'react';
import styled from '@emotion/styled';
import TodoItem from './TodoItem';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  max-width: 600px;
`;

function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </List>
  );
}

export default TodoList;