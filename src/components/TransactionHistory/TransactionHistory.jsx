import PropTypes from 'prop-types';
import { TransactionItem } from './TransactionItem';
import {
  TransactionTable,
  TableHead,
  TableHeadRow,
  TableRow,
} from './TransactionItem.styled';

export const TransactionHistory = ({ transactions }) => {
  return (
    <TransactionTable>
      <TableHead>
        <tr>
          <TableHeadRow>Type</TableHeadRow>
          <TableHeadRow>Amount</TableHeadRow>
          <TableHeadRow>Currency</TableHeadRow>
        </tr>
      </TableHead>

      <tbody>
        {transactions.map(transaction => (
          <TableRow key={transaction.id}>
            <TransactionItem transaction={transaction} />
          </TableRow>
        ))}
      </tbody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
