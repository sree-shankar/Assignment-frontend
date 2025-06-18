import styled from "styled-components";



export default function ProfileCard({ profile }) {
  return (
    <Card>
      <h3>Profile Information</h3>

      <ProfileRow>
        <Avatar src={profile.avatar || "https://i.pravatar.cc/100"} alt="User" />
        <NameRole>
          <Name>{profile.name}</Name>
          <Role>{profile.role}</Role>
        </NameRole>
      </ProfileRow>

      <Label>Email</Label>
      <Value>{profile.email}</Value>

      <Label>Organization</Label>
      <Value>{profile.org}</Value>

      <Label>Member Since</Label>
      <Value>{profile.joined}</Value>

      <Label>API Key</Label>
      <ApiKeyWrapper>
        <ApiKey>{profile.apiKey}</ApiKey>
        <StatusBadge>Active</StatusBadge>
      </ApiKeyWrapper>
    </Card>
  );
}



const Card = styled.div`
  background: ${(props) => props.theme.colors.cardBg};
  padding: 1.5rem;
  border-radius: 12px;
  color: white;
  box-shadow: 0 0 0 1px #e5e7eb;
  /* max-width: 400px; */
  max-width: 100%;

  /* width: 100%; */

  @media (max-width: 768px) {
    /* padding: 1rem; */
        padding: 0.6rem;

    max-width: 100%;
  }
`;

const ProfileRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  margin-right: 1rem;

  @media (max-width: 500px) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const NameRole = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
`;

const Role = styled.div`
  color: white;
  font-size: 0.9rem;
`;

const Label = styled.p`
  font-weight: 600;
  margin: 0.75rem 0 0.25rem;
  font-size: 0.95rem;
`;

const Value = styled.p`
  margin: 0;
  word-break: break-word;
`;

const ApiKeyWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const ApiKey = styled.code`
  background: black;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.9rem;
  word-break: break-all;
`;

const StatusBadge = styled.span`
  background-color: #e0f7ec;
  color: #059669;
  font-size: 0.75rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
`;
