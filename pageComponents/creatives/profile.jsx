import { profileMenu, infoMenu, user } from './constants';
import Profile from 'pageComponents/profile';

const CreativesProfile = () => {
  return (
    <Profile
      user={user}
      profileMenu={profileMenu}
      infoMenu={infoMenu}
    />
  );
};

export default CreativesProfile;