import React from "react";
import styled from "styled-components";
import Ticket from "./Ticket";

const Lanes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  padding-top: 6rem;
  width: 18rem;
  height: fit-content;
  max-height: 85vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 1.1rem 0rem 1rem 1.1rem;
  overflow-y: scroll;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: rgba(255, 255, 255, 0.5);
    top: 5rem;
  }
`;

const Alert = styled.div`
  text-align: center;
  padding: 0.5rem;
  background-color: red;
  color: white;
  font-weight: 500;
`;
const Title = styled.div`
  position: absolute;
  top: 1.5rem;
  left: 0.5rem;
  color: ${(props) =>
    props.lane === 1
      ? "#dee0e0"
      : props.lane === 2
      ? "#f5a003"
      : props.lane === 3
      ? "#e7e406"
      : "#06bd06"};
  font-weight: 600;
  font-size: 0.8rem;
  text-align: center;
  width: 10rem;
  padding: 0.2rem;
  background-color: rgba(255, 255, 255, 1);
  border-radius: 20px;
`;

function Lane({ tickets, loading, error, title, id, onDragStart }) {
  return (
    <Lanes>
      {(loading || error) && <Alert>{loading ? "loading..." : error}</Alert>}
      <Title lane={id}>{title}</Title>
      {tickets.map((ticket) => (
        <Ticket id={ticket.id} ticket={ticket} onDragStart={onDragStart}/>
      ))}
    </Lanes>
  );
}

export default Lane;
