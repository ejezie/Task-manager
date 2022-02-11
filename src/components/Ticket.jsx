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
  background-color: ${(props) =>
    props.lane === 1
      ? "#dee0e0"
      : props.lane === 2
      ? "#f5a003"
      : props.lane === 3
      ? "#e7e406"
      : "#06bd06"};
  height: 4px;
  border-radius: 18.75px;
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

function Ticket({ticket, onDragStart, toggleEdit}) {

  const setTicId = () => {
    localStorage.setItem('laneid', ticket.lane);
    localStorage.setItem('ticketid', ticket.id);
    console.log(ticket.lane + "-lane " + ticket.id + "-id");
  }
  const onDragDel = () => {
    localStorage.setItem('laneid', ticket.lane);
    localStorage.setItem('ticketid', ticket.id);
  }

  return (
    <TicketWrap draggable onDragStart={e=> {onDragStart(e, ticket.lane, ticket.id); }} onClick={setTicId}>
      <Wrap>
        <Bar lane = {ticket.lane}/>
        <Icon>
          <i class="fal fa-edit" onClick={toggleEdit}></i>
        </Icon>
      </Wrap>
      <Title>{ticket.title}</Title>
      <Text>{ticket.task}</Text>
    </TicketWrap>
  );
}

export default Ticket;
