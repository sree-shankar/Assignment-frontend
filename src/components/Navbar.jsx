import styled from "styled-components";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) => props.theme.colors.cardBg};
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem;
            min-width: 625px;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
  margin-bottom: 0.5rem;
`;

const LogoutButton = styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  cursor: pointer;

  @media (max-width: 768px) {
    align-self: flex-end;
  }
`;

export default function Navbar({ onLogout }) {
  return (
    <Nav>
      <Logo>Devbox</Logo>
      <LogoutButton onClick={onLogout}>Logout</LogoutButton>
    </Nav>
  );
}
