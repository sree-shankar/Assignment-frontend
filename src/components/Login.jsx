import styled from "styled-components";
import { useState } from "react";



export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setError("Please fill in both fields.");
      return;
    }
    setError("");
    onLogin();
  };

  return (
    <Wrapper>
      <Card>
        <Logo>DB</Logo>
        <Title>Welcome Back</Title>
        <Subtitle>Sign in to your Devbox Developer Portal</Subtitle>
        <Input
          type="email"
          placeholder="Username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {error && <ErrorText>{error}</ErrorText>}
        <Button onClick={handleSubmit}>Sign In</Button>
        <DemoText>Demo credentials: any email/password combination works</DemoText>
      </Card>
    </Wrapper>
  );
}



const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  /* background: linear-gradient(135deg, #2b1055, #6a3093); */
  padding: 1rem;
`;

const Card = styled.div`
  /* background-color: rgba(255, 255, 255, 0.05); */
  backdrop-filter: blur(10px);
  padding: 3rem;
  border-radius: 16px;
  max-width: 400px;
  width: 100%;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, #2b1055, #6a3093);
  text-align: center;
`;

const Logo = styled.div`
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: white;
  font-weight: bold;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  margin: 0 auto 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
`;

const Title = styled.h2`
  color: white;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.p`
  color: #cbd5e1;
  font-size: 0.9rem;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.50rem;
  margin-bottom: 1rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
`;

const Button = styled.button`
  width: 50%;
  padding: 0.50rem;
  background: linear-gradient(to right, #4f46e5, #6366f1);
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 0.5rem;

  &:hover {
    background: linear-gradient(to right, #4338ca, #4f46e5);
  }
`;

const ErrorText = styled.p`
  color: #f87171;
  font-size: 0.85rem;
  margin-top: -0.5rem;
  margin-bottom: 1rem;
`;

const DemoText = styled.p`
  color: #a1a1aa;
  font-size: 0.75rem;
  margin-top: 1.5rem;
`;