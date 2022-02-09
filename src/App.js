import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./containers/Board";
import { v4 as uuid } from "uuid";

function App() {
  const [addTask, setAddTask] = useState(false);
  const [editTask, setEditTask] = useState(false);

  const toggleAddTask = () => {
    setAddTask(!addTask);
  };
  const toggleEditTask = () => {
    setEditTask(!editTask);
  };

  const handleAddTask = async (task, title) => {
    try{
      const response = await fetch("http://localhost:3006/tickets", {
        method: "POST",
        body: JSON.stringify({
          "lane" : 1,
          task,
          title,
        }),
        headers: {"Content-type": "application/json; charset=UTF-8"}
      });
      console.log(response.data + " res")
    } catch(error){
      console.log(error)
    }
   
  };

  return (
    <div className="App">
      <Navbar
        toggleTask={toggleAddTask}
        taskState={addTask}
        toggleEdit={toggleEditTask}
        editState={editTask}
        handleAddTask={handleAddTask}
      />
      <Board toggleEdit={toggleEditTask} />
    </div>
  );
}

export default App;
