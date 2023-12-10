import { Box, IconButton, Avatar, Stack, Badge } from '@mui/material';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import { VisuallyHiddenInput } from '../Inputs/Custom/VisuallyHiddenInput';
import { useTypeDispatch } from 'services/redux/customHook/typeHooks';
import { updUserAvatar } from 'services/redux/auth/operationsUserProfile';
import { useEffect, useState } from 'react';

export interface IAvatarForm {
  name: string;
  avatarCloudUrl: string;
}

export const AvatarProfile = ({ avatarCloudUrl, name }: IAvatarForm) => {
  const [file, setFile] = useState(null);
  const dispatch = useTypeDispatch();

  useEffect(() => {
    if (!file) {
      return;
    }
    dispatch(updUserAvatar(file));
  }, [dispatch, file]);

  const handleFileChange = (evt: any) => setFile(evt.target.files[0]);

  return (
    <Box
      style={{
        paddingTop: '2px',
        position: 'relative',
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '4px',
      }}
    >
      <Stack direction="row" spacing={2}>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          badgeContent={
            <IconButton component="label" size="small" color="primary">
              <SettingsSharpIcon fontSize="medium" />
              <VisuallyHiddenInput type="file" onChange={handleFileChange} />
            </IconButton>
          }
        >
          <Avatar
            alt={name}
            src={avatarCloudUrl}
            sx={{ width: 64, height: 64 }}
          />
        </Badge>
      </Stack>
      <p>{name}</p>
    </Box>
  );
};
