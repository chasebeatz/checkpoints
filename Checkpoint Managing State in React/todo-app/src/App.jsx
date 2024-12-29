import React from 'react';
import './App.css';
import TaskList from './components/TaskList';

const App = () => {
  return (
    <div className="App">
      <h1>To-Do List</h1>
      <TaskList />
    </div>
  );
};

export default App;
