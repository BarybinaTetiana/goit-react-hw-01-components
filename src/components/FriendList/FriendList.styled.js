import styled from 'styled-components';

export const FriendsItem = styled.li`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 10px;
  padding: 10px;
  background-color: white;
  border-radius: 4px;
  box-shadow: 0px 1px 3px lightgray;
`;

export const FriendStatus = styled.span`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${({ online }) => (online ? 'green' : 'red')};
`;

export const FriendAvatar = styled.img`
  width: 50px;
  height: 50px;
  display: block;
`;

export const FriendName = styled.p`
  margin-left: 20px;
  font-size: 20px;
  font-weight: bold;
`;

export const FriendsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  gap: 5px;
  max-width: 300px;
  background-color: #fff;
  list-style: none;
  margin-top: 30px;
  margin-bottom: 30px;
`;
