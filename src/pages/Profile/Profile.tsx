import { ProfileEqptForm } from 'components/ProfilePageComp/ProfileEqptForm/ProfileEqptForm';
import { ProfileForm } from 'components/ProfilePageComp/ProfileForm/ProfileForm';
import { Paper } from '@mui/material';
import { AvatarProfile } from 'components/Common/Inputs/AvatarProfile/AvatarProfile';

export const Profile = () => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '18px',
        height: 'calc(100vh - 132px)',
      }}
    >
      <AvatarProfile />
      <ProfileForm />
      <ProfileEqptForm />
    </Paper>
  );
};
