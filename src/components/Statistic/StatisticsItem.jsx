import PropTypes from 'prop-types';
import { StatLabel, StatPercentage } from './Statistics.styled';

export const StatisticsItem = ({ stat: { label, percentage } }) => {
  return (
    <>
      <StatLabel>{label}</StatLabel>
      <StatPercentage>{percentage}%</StatPercentage>
    </>
  );
};

StatisticsItem.propTypes = {
  stat: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }).isRequired,
};
