import React from "react";
import styled from "styled-components";

const TicketWrap = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  width: 16rem;
  height: fit-content;
  padding: 1rem;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 1rem;
  transition: all, 0.3s;
  cursor: pointer;
  &:hover {
    background-color: rgba(255, 255, 255, 0.85);
  }
`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Bar = styled.div`
  width: 4rem;
  background-color: #dee0e0;
  height: 3px;
  border-radius: 18.75%;
`;
const Title = styled.div`
  font-size: 1rem;
  font-weight: 700;
`;
const Text = styled.div`
  font-size: 0.8rem;
  max-width: 400px;
`;
const Icon = styled.div`
  font-size: 0.7rem;
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.5s;
  &:hover {
    background-color: #d0e2db;
  }
`;

function Ticket({ticket}) {
  return (
    <TicketWrap>
      <Wrap>
        <Bar />
        <Icon>
          <i class="fal fa-edit"></i>
        </Icon>
      </Wrap>
      <Title>{ticket.title}</Title>
      <Text>{ticket.task}</Text>
    </TicketWrap>
  );
}

export default Ticket;
