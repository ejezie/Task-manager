import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 4rem;
  color: white;
  background-color: rgba(0, 0, 0, 0.8);
`;

const Logo = styled.h1`
  margin-left: 3rem;
  letter-spacing: 2px;
  margin-right: 0.4rem;
`;

function Navbar() {
  return (
    <Nav>
      <Logo>MiniTaskManager</Logo>
      <Logo>
        <i class="fas fa-thumbtack"></i>
      </Logo>
    </Nav>
  );
}

export default Navbar;
