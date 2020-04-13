import React from 'react';
import './App.css';
import TodoList from './TodoList/TodoList';
import Typography from "@material-ui/core/Typography";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Typography variant="h1">Todo Stream</Typography>
        <hr />
      </header>
      <TodoList></TodoList>
    </div>
  );
}

export default App;