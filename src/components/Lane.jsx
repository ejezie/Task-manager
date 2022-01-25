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
  height: 85vh;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 0px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(5px);
  -webkit-backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  position: relative;
  margin: 0rem 0rem 1rem 1.1rem;
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
  top: 1rem;
  left: 0.5rem;
  color: white;
  font-weight: 700;
  font-size: 1.4rem
`;

function Lane({ tickets, loading, error, title, id }) {
  return (
    <Lanes>
      {(loading || error) && <Alert>{loading ? "loading..." : error}</Alert>}
      <Title lane={id}>{title}</Title>
      {tickets.map((ticket) => (
        <Ticket id={ticket.id} ticket={ticket} />
      ))}
    </Lanes>
  );
}

export default Lane;
