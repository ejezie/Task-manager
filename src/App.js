import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Board from './containers/Board';

function App() {

  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

   const handleAddTask = () => {
     setAddTask(!addTask);
   };
   const handleEditTask = () => {
     setEditTask(!editTask);
   };
  
  return (
    <div className="App">
      <Navbar HandleTask={handleAddTask} taskToggle={addTask} EditTask={handleEditTask} editToggle={editTask}/>
      <Board />
    </div>
  );
}

export default App;
