import styled from "styled-components";
import Lane from "../components/Lane";
import Ticket from "../components/Ticket";

const BoardWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  height: 90vh;
  border-left: 1.4rem solid rgba(255, 255, 255, 0.2);
`;

const LaneMain = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  width: 20rem;
  height: 90vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  padding-top: 6rem;
  overflow-y: scroll;
  // &:after {
  //   content: "";
  //   position: absolute;
  //   height: 100%;
  //   width: 1px;
  //   background-color: rgba(255, 255, 255, 0.5);
  // }
  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    top: 5rem;
  }
`;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 8.55rem;
  left: 1rem;
`;

function Board() {
  return (
    <BoardWrap>
      <LaneMain>
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
        <Ticket />
      </LaneMain>
      <Circle></Circle>
      <Lane />
      <Lane />
      <Lane />
    </BoardWrap>
  );
}

export default Board;
