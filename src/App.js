import React, { useState } from 'react';
import styled from '@emotion/styled';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import NewTodoModal from './components/NewTodoModal';
import { ThemeProvider } from '@emotion/react';

const neonTheme = {
  background: '#000',
  primary: '#0ff',
  secondary: '#f0f',
  text: '#fff',
};

const batmanTheme = {
  background: '#000',
  primary: '#ffff00',
  secondary: '#ffffff',
  text: '#ffffff',
};

const AppContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.background};
  color: ${props => props.theme.text};
  font-family: 'Arial', sans-serif;
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(neonTheme);

  const addTodo = (title, notes) => {
    const newTodo = {
      id: Date.now(),
      title,
      notes,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const updateTodo = (id, title, notes) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, title, notes } : todo
      )
    );
    setSelectedTodo(null);
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    if (selectedTodo && selectedTodo.id === id) {
      setSelectedTodo(null);
    }
  };

  const toggleTheme = () => {
    setCurrentTheme(currentTheme === neonTheme ? batmanTheme : neonTheme);
  };

  return (
    <ThemeProvider theme={currentTheme}>
      <AppContainer>
        <Sidebar
          todos={todos}
          selectedTodo={selectedTodo}
          setSelectedTodo={setSelectedTodo}
          openNewTodoModal={() => setIsModalOpen(true)}
          toggleTheme={toggleTheme}
          currentTheme={currentTheme}
          neonTheme={neonTheme}
        />
        <MainContent
          selectedTodo={selectedTodo}
          updateTodo={updateTodo}
          deleteTodo={deleteTodo}
        />
        <NewTodoModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          addTodo={addTodo}
        />
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
