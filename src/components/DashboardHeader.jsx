import styled from "styled-components";
import { FaCheckCircle, FaClock, FaExclamationCircle } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

const Greeting = styled.h2`
  font-size: 1.8rem;
  margin-bottom: 0.25rem;
`;

const SubText = styled.p`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.textSecondary || "#888"};
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1rem;
  margin-top: 1.5rem;

    @media (max-width: 480px) {
    gap: 0.75rem;
  }
`;

const StatCard = styled.div`
  background-color: ${(props) => props.bg || "#fff"};
  border-radius: 12px;
  padding: 1rem;
  color: ${(props) => props.color || "#000"};
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
`;

const Label = styled.div`
  font-size: 0.9rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Value = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default function DashboardHeader({ name, stats }) {
  return (
    <Wrapper>
      <Greeting>Welcome back, {name}</Greeting>
      <SubText>Here's what's happening with your API usage today.</SubText>

      <CardsGrid>
        <StatCard bg="#eaf2ff" color="#1e40af">
          <Label><FiActivity /> Total API Calls</Label>
          <Value>{stats.total}</Value>
        </StatCard>

        <StatCard bg="#e6fbe9" color="#16a34a">
          <Label><FaCheckCircle /> Success Rate</Label>
          <Value>{stats.successRate}%</Value>
        </StatCard>

        <StatCard bg="#fff4e5" color="#ea580c">
          <Label><FaClock /> Avg Response Time</Label>
          <Value>{stats.avgTime}ms</Value>
        </StatCard>

        <StatCard bg="#f6f0ff" color="#9333ea">
          <Label><FaExclamationCircle /> Today's Calls</Label>
          <Value>{stats.today}</Value>
        </StatCard>
      </CardsGrid>
    </Wrapper>
  );
}
