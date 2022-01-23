import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.88);
`;

const Logo = styled.h1`
  margin-left: 3rem;
  letter-spacing: 2px;
  margin-right: 1.5rem;
  font-size: 1.8rem;
  @media (max-width: 960px){
      font-size: 1rem;
      margin-left: 1rem;
  }
`;
const Heading = styled.h1`
  font-size: 2rem;
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;

function Navbar() {
  return (
    <Nav>
      <Logo>MiniTaskManager</Logo>
      <Heading>
        <i class="fas fa-thumbtack"></i>
      </Heading>
    </Nav>
  );
}

export default Navbar;
