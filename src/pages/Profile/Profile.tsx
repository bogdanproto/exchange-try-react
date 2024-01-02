import { ProfileEqptForm } from 'components/ProfilePageComp/ProfileEqptForm/ProfileEqptForm';
import { ProfileForm } from 'components/ProfilePageComp/ProfileForm/ProfileForm';
import { Paper } from '@mui/material';
import { AvatarProfile } from 'components/Common/Inputs/AvatarProfile/AvatarProfile';
import { LogOut } from 'components/Auth/LogOut/LogOut';
import { Box } from '@mui/material';

export const Profile = () => {
  return (
    <Paper
      elevation={3}
      style={{
        padding: '18px',
        height: '100%',
        position: 'relative',
      }}
    >
      <Box style={{ position: 'absolute', top: 0, right: 0 }}>
        <LogOut />
      </Box>
      <AvatarProfile />
      <ProfileForm />
      <ProfileEqptForm />
    </Paper>
  );
};
