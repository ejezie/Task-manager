import React from "react";
import styled from "styled-components";

const TicketWrap = styled.div`
display: flex;
align-items: flex-start;
flex-direction: column;
width: 18rem;
height: fit-content;
padding: 1rem;
background-color: rgba(255, 255, 255, 1);
margin-bottom: 1rem;`;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const Bar = styled.div`
  width: 4rem;
  background-color: aqua;
  height: 4px;
  border-radius: 18.75%;
`;
const Title = styled.div`
  font-size: 1.1rem;
  font-weight: 700;
`;
const Text = styled.div`
  font-size: 0.9rem;
  max-width: 400px;
`;
const Icon = styled.div`
  font-size: 0.7rem;
`;

function Ticket() {
  return (
    <TicketWrap>
      <Wrap>
        <Bar />
        <Icon>
          <i class="fal fa-edit"></i>
        </Icon>
      </Wrap>
      <Title>Code the Frontend</Title>
      <Text>Finish up the mini task manager application tommorow</Text>
    </TicketWrap>
  );
}

export default Ticket;
