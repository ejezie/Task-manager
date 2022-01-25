import React, { Component } from 'react';
import styled from "styled-components";
import Lane from "../components/Lane";
import Ticket from "../components/Ticket";

const BoardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  height: 90vh;
  border-left: 1.4rem solid rgba(255, 255, 255, 0.4);
`;

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
      tickets: [],
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

  async componentDidUpdate(prevState){
    if(prevState.data !== this.state.data){
     this.setState({
       tickets: this.state.data
     });
    }
  }

  onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  }

  render() {
    const { loading, error, tickets, data } = this.state;
    console.log(this.state.data);
    const lanes = [
      { id: 1, title: "Created task" },
      { id: 2, title: "In progress" },
      { id: 3, title: "Reviewing" },
      { id: 4, title: "Completed" },
    ];
    return (
      <BoardWrap>
        <Circle></Circle>
        {lanes.map((lane) => (
          <Lane
            id={lane.id}
            title={lane.title}
            loading={loading}
            error={error}
            tickets={tickets.filter((tickets) => tickets.lane === lane.id)}
            onDragStart = {this.onDragStart}
          />
        ))}
      </BoardWrap>
    );
  }
}


export default Board;
