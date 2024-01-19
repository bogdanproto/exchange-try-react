import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { LoaderContainer } from './Loader.styled';
import { theme } from '../../../const/theme/theme';

export const Loader = () => {
  return (
    <LoaderContainer>
      <Stack sx={{ width: '100%', color: theme.colorLoader }}>
        <LinearProgress color="inherit" />
      </Stack>
    </LoaderContainer>
  );
};
