import { Box } from '@mui/material';
import { SingleInputForm } from 'components/Common/Inputs/SingleInputForm/SingleInputForm';

export const ProfileForm = () => {
  return (
    <Box
      style={{
        position: 'relative',
        paddingTop: '4px',
      }}
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '4px',
      }}
    >
      <SingleInputForm name={'name'} />
      <SingleInputForm name={'phone'} />
    </Box>
  );
};
