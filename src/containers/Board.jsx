import styled from "styled-components";

const BoardWrap = styled.div`
width: 100vw;
height: 90vh;
border-left: 1.4rem solid rgba(255, 255, 255, 0.7);
`;

const LaneF = styled.div`
  width: 20rem;
  height: 90vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  &:after {
    content: "";
    position: absolute;
    height: 100%;
    width: 1px;
    background-color: rgba(255, 255, 255, 0.5);
  }
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
  return <BoardWrap>
      <LaneF/>
      <Circle></Circle>
  </BoardWrap>;
}

export default Board;
