import styled from "styled-components";
import { FiLogOut } from "react-icons/fi";


export default function Navbar({ onLogout }) {
  return (
    <Nav>
      <Logo>Devbox Developer Portal</Logo>
      <LogoutButton onClick={onLogout}> <FiLogOut style={{ marginRight: "0.5rem" }} />Logout</LogoutButton>
    </Nav>
  );
}


const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  /* background: ${(props) => props.theme.colors.cardBg}; */
  background:#6366f1;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    align-items: flex-start;
    padding: 1rem;
          
            
  }
`;

const Logo = styled.div`
  font-weight: bold;
  color: white;

`;

const LogoutButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;

  border-radius: 8px;
  cursor: pointer;
  

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;