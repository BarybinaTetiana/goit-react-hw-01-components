import styled from 'styled-components';

export const TransactionTable = styled.table`
  width: 600px;
  margin: 0 auto;

  text-align: center;
  border-radius: 8px;
  background-color: #fff;
`;

export const TableHead = styled.thead`
  background-color: lightseagreen;
  color: black;
  text-transform: uppercase;
`;

export const TableHeadRow = styled.th`
  padding: 10px;
`;

export const TableRow = styled.tr`
  :nth-of-type(even) {
    background-color: grey;
  }
`;

export const TableItem = styled.td`
  padding: 10px;
  border: 1px solid black;
`;
