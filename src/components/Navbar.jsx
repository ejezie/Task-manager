import styled from "styled-components";
import bg from "../assets/bg2.jpeg";


const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.88);
  position: relative;
`;

const AddTask = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0)), url(${bg});
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  height: 100vh;
  width: 20rem;
  z-index: 2;
  color: black;
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
      border-bottom: 2px solid red;
      border-top: none;
      border-right: none;
      border-left: none;
      // border-radius: 5px;
      width: 15rem;
      height: 3rem;
      margin-bottom: 2rem;
      padding: 1rem;
      font-size: 1rem;
    }
    textarea {
      border: 2px solid #dee0e0;
      border-radius: 6px;
      width: 15rem;
      height: 10rem;
      margin-bottom: 2rem;
      padding: 0.5rem;
      font-size: 1rem;
    }
    button {
      padding: 0.5rem;
      width: 15rem;
      border-radius: 25px;
      border: none;
      cursor: pointer;
    }
  }
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

const Logo = styled.h1`
  margin-left: 3rem;
  letter-spacing: 2px;
  margin-right: 1.5rem;
  font-size: 1.3rem;
  @media (max-width: 960px){
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
  font-size: 1.1rem;
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

function Navbar() {
  return (
    <Nav>
      <Wrap>
        <Logo>MiniTaskManager</Logo>
        <Heading>
          <i class="fas fa-thumbtack"></i>
        </Heading>
      </Wrap>
      <Wrap>
        <Icon>
          <i class="fas fa-plus"></i>
        </Icon>
        <HeadingBtn>Add task</HeadingBtn>
      </Wrap>
      <AddTask>
        <form action="">
          <i class="fas fa-window-close"></i>
          Add new task
          <input type="text" />
          <textarea name="" id="" cols="30" rows="10"></textarea>
          <button>Send</button>
        </form>
      </AddTask>
    </Nav>
  );
}

export default Navbar;
