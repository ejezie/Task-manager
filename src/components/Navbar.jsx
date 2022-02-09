import styled from "styled-components";
import bg from "../assets/bg2.jpeg";
import { useState } from "react";

const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.88);
  position: relative;
  .links {
    display: flex;
  }
`;

const AddTask = styled.div`
  display: ${(props) => (props.add ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background-color: rgba(255, 255, 255, 0.95);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 100vh;
  width: 20rem;
  z-index: 2;
  color: black;
  font-size: 1.2rem;
  font-weight: 700;
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    position: relative;
    i {
      position: absolute;
      top: -8rem;
      right: 1rem;
      cursor: pointer;
      font-size: 1.5rem;
    }
    input {
      border-bottom: 1px solid black;
      border-top: none;
      border-right: none;
      border-left: none;
      background-color: transparent;
      // border-radius: 5px;
      width: 15rem;
      height: 3rem;
      margin: 2rem 0;
      padding: 1rem;
      font-size: 1rem;
      outline: none;
      color: black;
    }
    textarea {
      background-color: transparent;
      border-bottom: 1px solid black;
      border-top: none;
      border-right: none;
      border-left: none;
      width: 15rem;
      height: 10rem;
      margin-bottom: 2rem;
      padding: 0.5rem;
      font-size: 1rem;
      outline: none;
      color: black;
    }
    button {
      padding: 0.5rem;
      width: 15rem;
      border-radius: 25px;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      &:hover {
        background-color: #dee0e0;
        color: white;
      }
    }
  }
`;

const UpdateTask = styled(AddTask)`
  display: ${(props) => (props.edit ? "flex" : "none")};
  z-index: 10;
`;

const Wrap = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s;
  &:hover {
    color: #dee0e0;
  }
`;
const WrapOne = styled(Wrap)``;
const WrapTwo = styled(Wrap)``;

const Logo = styled.h1`
  margin-left: 3rem;
  letter-spacing: 2px;
  margin-right: 1.5rem;
  font-size: 1.3rem;
  @media (max-width: 960px) {
    font-size: 0.9rem;
    margin-left: 1rem;
  }
`;
const Heading = styled.h1`
  font-size: 1.4rem;
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;
const HeadingBtn = styled.h1`
  font-size: 0.9rem;
  margin-right: 3rem;
  @media (max-width: 960px) {
    font-size: 0.8rem;
    margin-right: 3rem;
  }
`;
const Icon = styled.h1`
  font-size: 1.1rem;
  margin-right: 0.5rem;
  @media (max-width: 960px) {
    font-size: 0.8rem;
  }
`;

function Navbar({ toggleEdit, toggleTask, taskState, editState, handleAddTask }) {

  const [taskContent, setTaskContent ] = useState({
    title: "",
    task: "",
  })

  const handleChange = (e) => {
    setTaskContent({...taskContent, [e.target.name] : e.target.value})
  }

  const onAddClick = (e) => {
     e.preventDefault();
    if (taskContent.title === "" || taskContent.task === "") {
      alert("fill up both fields")
    }

    console.log(taskContent.task + "-task /n " + taskContent.title);
    handleAddTask(taskContent);
  }

  return (
    <Nav>
      <Wrap>
        <Logo>MiniTasker</Logo>
        <Heading>
          <i class="fas fa-thumbtack"></i>
        </Heading>
      </Wrap>
      <div className="links">
        <WrapOne onClick={toggleTask}>
          <Icon>
            <i class="fas fa-plus"></i>
          </Icon>
          <HeadingBtn>Add task</HeadingBtn>
        </WrapOne>
        <WrapTwo onClick={toggleEdit}>
          <Icon>
            <i class="fas fa-pencil"></i>
          </Icon>
          <HeadingBtn>Edit task</HeadingBtn>
        </WrapTwo>
      </div>
      <AddTask add={taskState}>
        <form action="">
          <i class="fas fa-window-close" onClick={toggleTask}></i>
          ADD A NEW TASK
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={(e) => handleChange(e)}
          />
          <textarea
            name="task"
            id=""
            cols="30"
            rows="10"
            placeholder="Content"
            onChange={(e) => handleChange(e)}
          ></textarea>
          <button onClick={onAddClick}>Add the task</button>
        </form>
      </AddTask>
      <UpdateTask edit={editState}>
        <form action="">
          <i class="fas fa-window-close" onClick={toggleEdit}></i>
          UPDATE YOUR TASK
          <input type="text" placeholder="Title" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Content"
          ></textarea>
          <button>Update</button>
        </form>
      </UpdateTask>
    </Nav>
  );
}

export default Navbar;
