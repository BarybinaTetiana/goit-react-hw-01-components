import styled from 'styled-components';

export const ProfileContainer = styled.div`
  margin: 0 auto;
  width: 400px;
  height: auto;
  font-size: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 0 10px 10px -5px rgba(0, 0, 0, 0.3);
  background-color: #fff;
`;

export const ProfileDescription = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 0;
`;

export const ProfilePhoto = styled.img`
  display: block;
  width: 200px;
  border-radius: 50%;
  margin: 0 auto;
  background-color: lightseagreen;
`;

export const ProfileName = styled.p`
  font-size: 24px;
  font-weight: 700;
`;

export const ProfileTag = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: darkgray;
`;

export const ProfileLocation = styled.p`
  font-size: 22px;
  font-weight: 600;
  color: darkgray;
`;

export const ProfileStats = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;
  max-width: 100%;
  list-style: none;
  background-color: lightgray;
  box-shadow: 1px 2px 4px gray;
`;

export const ProfileStatItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const ProfileStatLabel = styled.span`
  margin: 0 10px;
  font-size: 20px;
  color: grey;
  font-weight: 600;
  display: flex;
`;

export const ProfileStatQuantuty = styled.span`
  margin: 0 10px;
  font-size: 22px;
  font-weight: bold;
  display: flex;
`;
