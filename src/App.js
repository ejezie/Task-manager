import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Board from './containers/Board';

function App() {

  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

   const toggleAddTask = () => {
     setAddTask(!addTask);
   };
   const toggleEditTask = () => {
     setEditTask(!editTask);
   };

   const handleAddTask = (data)=>{

   }
  
  return (
    <div className="App">
      <Navbar
        toggleTask={toggleAddTask}
        taskState={addTask}
        toggleEdit={toggleEditTask}
        editState={editTask}
      />
      <Board toggleEdit={toggleEditTask} />
    </div>
  );
}

export default App;
