import ProfileCard from "./ProfileCard";
import TableSection from "./TableSection";
import DashboardHeader from "./DashboardHeader";
import styled from "styled-components";



export default function Dashboard({ profile, data }) {
    const stats = {
        total: data.length,
        successRate: Math.round(
            (data.filter((d) => d.status === "Success").length / data.length) *
                100
        ),
        avgTime: Math.round(
            data.reduce((sum, d) => sum + parseInt(d.time), 0) / data.length
        ),
        avgResponseTime: Math.round(
            data.reduce((sum, d) => sum + d.responseTime, 0) / data.length
        ),
        today: data.length,
    };

    return (
        <>
            <Container>
                <DashboardHeader name={profile.name} stats={stats} />
            </Container>

            <Containersecond>
                {" "}
                <ProfileCard profile={profile} />
                <TableSection data={data} />
            </Containersecond>
        </>
    );
}



const Container = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: 768px) {
        padding: 1rem;
    }
`;

const Containersecond = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: row;
    gap: 2rem;
    /* flex-wrap: wrap; */

    @media (max-width: 768px) {
        flex-direction: column;
        /* padding: 1rem; */
    }
`;