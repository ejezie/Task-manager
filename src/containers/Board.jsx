import React, { Component } from 'react';
import styled from "styled-components";
import Lane from "../components/Lane";
import dataFecth from "../dataFetch";

const BoardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100vw;
  height: 90vh;
  border-left: 1.4rem solid rgba(255, 255, 255, 0.4);
  overflow-x: scroll;
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
      tickets: [],
      drag: false,
    };
  }

  componentDidUpdate(prevProps){
    if(prevProps.data !== this.props.data){
     this.setState({
       tickets: this.props.data
     });
    }
  }

  onDragStart = (e, laneid, ticketid) => {
    e.dataTransfer.setData('laneid', laneid);
    e.dataTransfer.setData('ticketid', ticketid);
    this.props.onDrag(true);
  }

  onDragOver = e => {
        e.preventDefault();
    }

  onDrop = (e, laneid) => {
    // const ticketLane = e.dataTransfer.getData('laneid');
    const ticketId = JSON.parse( e.dataTransfer.getData('ticketid'));
    this.props.onDrag(false)

    const tickets = this.state.tickets.map(ticket => {
        if(ticket.id === ticketId){
          ticket.lane = laneid;
          // var ticketTarget = ticket;
          this.props.handleLaneChange(ticketId, laneid, ticket.task, ticket.title)
        }
      return ticket;
    })
    this.setState({
      ...this.state,
      tickets,
    })
  }

  render() {
    const { loading, error, toggleEdit } = this.props;
  
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
            toggleEdit={toggleEdit}
            tickets={this.state.tickets.filter(
              (tickets) => tickets.lane === lane.id
            )}
            onDragStart={this.onDragStart}
            onDragOver={this.onDragOver}
            onDrop={this.onDrop}
          />
        ))}
      </BoardWrap>
    );
  }
}


export default dataFecth(Board);
