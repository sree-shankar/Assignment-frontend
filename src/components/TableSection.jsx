import React, { useState, useMemo } from "react";
import styled from "styled-components";



const sortData = (data, sortBy, ascending) => {
  return [...data].sort((a, b) => {
    const valA = a[sortBy].toLowerCase ? a[sortBy].toLowerCase() : a[sortBy];
    const valB = b[sortBy].toLowerCase ? b[sortBy].toLowerCase() : b[sortBy];
    if (valA < valB) return ascending ? -1 : 1;
    if (valA > valB) return ascending ? 1 : -1;
    return 0;
  });
};

export default function TableSection({ data }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [sortBy, setSortBy] = useState("name");
  const [ascending, setAscending] = useState(true);

  const handleSort = (field) => {
    if (sortBy === field) {
      setAscending(!ascending);
    } else {
      setSortBy(field);
      setAscending(true);
    }
  };

  const filteredData = useMemo(() => {
    let filtered = data;

    if (statusFilter !== "All") {
      filtered = filtered.filter((item) => item.status === statusFilter);
    }

    if (searchTerm.trim()) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return sortData(filtered, sortBy, ascending);
  }, [data, searchTerm, statusFilter, sortBy, ascending]);

  return (
    <Container>
      <h3 style={{ color: "white" }}>Recent API Usage</h3>

      <Controls>
        <Input
          placeholder="Search APIs..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
        >
          <option value="All">All Status</option>
          <option value="Success">Success</option>
          <option value="Error">Error</option>
          <option value="Warning">Warning</option>
        </Select>
      </Controls>

      <TableWrapper>
        <Table>
          <thead>
            <tr>
              <Th onClick={() => handleSort("name")}>API Name ⬍</Th>
              <Th>Method</Th>
              <Th onClick={() => handleSort("time")}>Time ⬍</Th>
              <Th>Response Time</Th>
              <Th>Status</Th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length === 0 ? (
              <NoDataRow>
                <td colSpan="5">No data found</td>
              </NoDataRow>
            ) : (
              filteredData.map((row, i) => (
                <tr key={i}>
                  <Td>{row.name}</Td>
                  <Td>{row.method}</Td>
                  <Td>{row.time}</Td>
                  <Td>{row.responseTime} ms</Td>
                  <Td>
                    <StatusLabel status={row.status}>
                      {row.status} {row.code}
                    </StatusLabel>
                  </Td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </TableWrapper>
    </Container>
  );
}




const Container = styled.div`
  background: ${(props) => props.theme.colors.cardBg};
  border-radius: 12px;
  padding: 1rem;
  flex: 2;
  overflow-x: auto;
    /* width: 100%; */

    


    
  @media (max-width: 768px) {
        padding: 1rem;


  }

  

`;

const Controls = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 1rem;
  flex-wrap: wrap;

  @media (max-width: 600px) {
    flex-direction: column;
    
  }
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  flex: 1;
  min-width: 200px;

  @media (max-width: 600px) {
    /* width: 100%; */
  }
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  border-radius: 8px;
  border: 1px solid ${(props) => props.theme.colors.border};
  min-width: 150px;

  @media (max-width: 600px) {
    width: 100%;
  }
`;

const TableWrapper = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  min-width: 600px; 
`;

const Th = styled.th`
  background: #353535;
  color: white;
  padding: 0.75rem;
  text-align: left;
  cursor: pointer;
  user-select: none;
  font-size: 0.9rem;
`;

const Td = styled.td`
  padding: 0.75rem;
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  color: white;
  font-size: 0.9rem;
`;

const NoDataRow = styled.tr`
  td {
    text-align: center;
    padding: 1.5rem;
    color: ${(props) => props.theme.colors.textLight || "#aaa"};
    font-style: italic;
  }
`;

const StatusLabel = styled.span`
  padding: 0.25rem 0.6rem;
  border-radius: 8px;
  font-size: 0.75rem;
  font-weight: 500;
  color: white;
  background-color: ${(props) => {
    switch (props.status) {
      case "Success":
        return "#4CAF50";
      case "Error":
        return "#F44336";
      case "Warning":
        return "#FF9800";
      default:
        return "#888";
    }
  }};
`;

