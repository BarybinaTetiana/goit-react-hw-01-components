import PropTypes from 'prop-types';
import { FriendItem } from './FriendItem';
import { FriendsItem, FriendsList } from './FriendList.styled';

export const FriendList = ({ friends }) => {
  return (
    <FriendsList>
      {friends.map(friend => (
        <FriendsItem key={friend.id}>
          <FriendItem friend={friend} />
        </FriendsItem>
      ))}
    </FriendsList>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
