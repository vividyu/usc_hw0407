import React from 'react';
import './App.css';
import TaskCreator from './TaskCreator';
import TasksList from './TasksList';

function App() {
  return (
    <div className="App">
      <TaskCreator />
      <TasksList />
    </div>
  );
}

export default App;
