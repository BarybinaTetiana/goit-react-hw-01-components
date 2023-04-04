import styled from 'styled-components';

export const StatSection = styled.section`
  max-width: 400px;
  margin: 0 auto;
  border: 2px solid gray;
  border-radius: 4px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #fff;
`;

export const StatTitle = styled.h2`
  display: flex;
  text-align: center;
  justify-content: center;
  text-transform: uppercase;
`;

export const StatList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style: none;
  max-width: 100%;

  background-color: #fff;
  padding: 0;
  margin: 0;
`;

export const StatsItem = styled.li`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  padding: 10px;
  padding-left: 0;
  color: black;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`.padStart(
      5,
      '0'
    );
  }};
`;

export const StatLabel = styled.span`
  font-size: 20px;
`;

export const StatPercentage = styled.span`
  font-size: 20px;
`;
