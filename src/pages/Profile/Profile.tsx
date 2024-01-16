import { ProfileEqptForm } from 'components/ProfilePageComp/ProfileEqptForm/ProfileEqptForm';
import { ProfileForm } from 'components/ProfilePageComp/ProfileForm/ProfileForm';
import { Paper } from '@mui/material';
import { AvatarProfile } from 'components/Common/Inputs/AvatarProfile/AvatarProfile';
import { LogOut } from 'components/Auth/LogOut/LogOut';
import { ToggleButtonGroup, ToggleButton, Box } from '@mui/material';
import { useState } from 'react';

enum MenuProfile {
  general = 'GENERAL',
  eqpts = 'EQUIPMENTS',
}

export const Profile = () => {
  const [alignment, setAlignment] = useState<MenuProfile>(MenuProfile.general);

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: MenuProfile
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };
  return (
    <Paper
      elevation={3}
      style={{
        padding: '18px',
        height: 'calc(100vh - 152px)',
        position: 'relative',
      }}
    >
      <Box style={{ position: 'absolute', top: 0, right: 0 }}>
        <LogOut />
      </Box>
      <AvatarProfile />
      <Box
        style={{
          width: '100%',
          height: '34px',
          marginTop: '12px',
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          fullWidth
          size="small"
          style={{
            height: '28px',
          }}
        >
          <ToggleButton value={MenuProfile.general} sx={{ fontWeight: 'bold' }}>
            {MenuProfile.general}
          </ToggleButton>
          <ToggleButton value={MenuProfile.eqpts} sx={{ fontWeight: 'bold' }}>
            {MenuProfile.eqpts}
          </ToggleButton>
        </ToggleButtonGroup>
      </Box>
      {alignment === MenuProfile.general && <ProfileForm />}
      {alignment === MenuProfile.eqpts && <ProfileEqptForm />}
    </Paper>
  );
};
