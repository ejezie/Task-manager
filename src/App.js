import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Board from "./containers/Board";
import { v4 as uuid } from "uuid";
import axios from "axios";

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
      // const response = await fetch("http://localhost:3006/tickets", {
      //   method: "POST",
      //   body: JSON.stringify({
      //     "lane" : 1,
      //     task,
      //     title,
      //   }),
      //   headers: {"Content-type": "application/json; charset=UTF-8"}
      // });
      // console.log(response.data + " res")

    const body = {
      id: uuid(),
      "lane" : 1,
      task,
      title,
    }  
      
    const response = await axios.post("http://localhost:3006/tickets", body);
    console.log(response.data);
    window.location.reload();
    } catch(error){
      console.log(error)
    }
   
  };

  const handleUpdateTask = async (e, task, title) => {
    const lane =  JSON.parse(localStorage.getItem('laneid'));
    const id = JSON.parse(localStorage.getItem('ticketid'));
    // const id = 2;
    try{
      const body = {
        id,
        lane,
        task,
        title,
      }
      const response = await axios.put(`http://localhost:3006/tickets/${id}`, body);
      console.log(response.data);
    }catch(error){
      console.log(error);
    }

  }

  return (
    <div className="App">
      <Navbar
        toggleTask={toggleAddTask}
        taskState={addTask}
        toggleEdit={toggleEditTask}
        editState={editTask}
        handleAddTask={handleAddTask}
        handleUpdateTask={handleUpdateTask}
      />
      <Board toggleEdit={toggleEditTask} />
    </div>
  );
}

export default App;
