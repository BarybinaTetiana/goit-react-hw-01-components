import PropTypes from 'prop-types';

import { FriendStatus, FriendAvatar, FriendName } from './FriendList.styled';

export const FriendItem = ({ friend: { avatar, name, isOnline } }) => {
  return (
    <>
      <FriendStatus online={isOnline}>{isOnline}</FriendStatus>
      <FriendAvatar src={avatar} alt="User avatar" />
      <FriendName>{name}</FriendName>
    </>
  );
};

FriendItem.propTypes = {
  friend: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }).isRequired,
};
