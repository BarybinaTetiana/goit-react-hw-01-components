import PropTypes from 'prop-types';
import {
  ProfileContainer,
  ProfileDescription,
  ProfilePhoto,
  ProfileName,
  ProfileTag,
  ProfileLocation,
  ProfileStats,
  ProfileStatItem,
  ProfileStatLabel,
  ProfileStatQuantuty,
} from './Profile.styled';

export const Profile = ({
  user: {
    username,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  },
}) => {
  return (
    <ProfileContainer>
      <ProfileDescription>
        <ProfilePhoto src={avatar} alt="User avatar" />
        <ProfileName>{username}</ProfileName>
        <ProfileTag>@{tag}</ProfileTag>
        <ProfileLocation>{location}</ProfileLocation>
      </ProfileDescription>

      <ProfileStats>
        <ProfileStatItem>
          <ProfileStatLabel>Followers</ProfileStatLabel>
          <ProfileStatQuantuty>{followers}</ProfileStatQuantuty>
        </ProfileStatItem>
        <ProfileStatItem>
          <ProfileStatLabel>Views</ProfileStatLabel>
          <ProfileStatQuantuty>{views}</ProfileStatQuantuty>
        </ProfileStatItem>
        <ProfileStatItem>
          <ProfileStatLabel>Likes</ProfileStatLabel>
          <ProfileStatQuantuty>{likes}</ProfileStatQuantuty>
        </ProfileStatItem>
      </ProfileStats>
    </ProfileContainer>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};
