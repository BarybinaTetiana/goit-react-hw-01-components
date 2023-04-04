import PropTypes from 'prop-types';
import { TableItem } from './TransactionItem.styled';

export const TransactionItem = ({
  transaction: { type, amount, currency },
}) => {
  return (
    <>
      <TableItem>{type}</TableItem>
      <TableItem>{amount}</TableItem>
      <TableItem>{currency}</TableItem>
    </>
  );
};

TransactionItem.propTypes = {
  transaction: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }).isRequired,
};
