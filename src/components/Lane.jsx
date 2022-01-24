import React from 'react';
import styled from 'styled-components';

const Lanes = styled.div`
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
//   &:after {
//     content: "";
//     position: absolute;
//     height: 100%;
//     width: 1px;
//     background-color: rgba(255, 255, 255, 0.5);
//   }
//   &:before {
//     content: "";
//     position: absolute;
//     height: 1px;
//     width: 100%;
//     background-color: rgba(255, 255, 255, 0.5);
//     top: 5rem;
//   }
`;

function Lane() {
  return <Lanes></Lanes>;
}

export default Lane;
