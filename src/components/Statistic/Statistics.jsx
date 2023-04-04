import PropTypes from 'prop-types';
import { StatisticsItem } from './StatisticsItem';
import {
  StatsItem,
  StatList,
  StatTitle,
  StatSection,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <>
      <StatSection>
        {title && <StatTitle>{title}</StatTitle>}

        <StatList>
          {stats.map(stat => (
            <StatsItem key={stat.id}>
              <StatisticsItem stat={stat} />
            </StatsItem>
          ))}
        </StatList>
      </StatSection>
    </>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
