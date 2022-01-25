import React, { Component } from 'react';
import styled from "styled-components";
import Lane from "../components/Lane";
import Ticket from "../components/Ticket";

const BoardWrap = styled.div`
  display: flex;
  align-items: flex-end;
  width: 100vw;
  height: 90vh;
  border-left: 1.4rem solid rgba(255, 255, 255, 0.4);
`;

// const LaneMain = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: flex-start;
//   flex-direction: column;
//   width: 20rem;
//   height: 90vh;
//   background: rgba(255, 255, 255, 0.2);
//   border-radius: 0px;
//   box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
//   backdrop-filter: blur(5px);
//   -webkit-backdrop-filter: blur(5px);
//   border: 1px solid rgba(255, 255, 255, 0.3);
//   position: relative;
//   padding-top: 6rem;
//   overflow-y: scroll;
//   &:before {
//     content: "";
//     position: absolute;
//     height: 1px;
//     width: 100%;
//     background-color: rgba(255, 255, 255, 0.5);
//     top: 5rem;
//   }
// `;

const Circle = styled.div`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: 8.55rem;
  left: 0.9rem;
`;

class Board extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      loading: true,
      error: "",
    };
  }

  async componentDidMount() {
    this._isMounted = true;
    try {
      const tickets = await fetch("http://localhost:3006/tickets");
      const ticketJSON = await tickets.json();
      // console.log(ticketJSON);

      if (ticketJSON) {
        this.setState({
          data: ticketJSON,
          loading: false,
        });
      }
    } catch (error) {
      this.setState({
        loading: false,
        error: "Error fectching tickets",
      });
    }
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  render() {
    const { data, loading, error } = this.state;
    const lanes = [
      { id: 1, title: "Created task" },
      { id: 2, title: "In progress" },
      { id: 3, title: "Reviewing" },
      { id: 4, title: "Completed" },
    ];
    return (
      <BoardWrap>
        {/* <LaneMain>
         
          {data.map((data) => (
            <Ticket id={data.id} data={data} />
          ))}
        </LaneMain> */}
        <Circle></Circle>
        {lanes.map((lane) => (
          <Lane
            id={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            tickets={data.filter((tickets) => tickets.lane === lane.id)}
          />
        ))}
      </BoardWrap>
    );
  }
}


export default Board;
