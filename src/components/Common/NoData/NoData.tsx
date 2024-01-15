import FindInPageOutlinedIcon from '@mui/icons-material/FindInPageOutlined';
import { Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
export const NoData = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{ width: '100%' }}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      <FindInPageOutlinedIcon
        sx={{ fontSize: 96, color: theme.palette.secondary.light }}
      />
      <Typography
        variant="overline"
        style={{
          lineHeight: '1',
          fontSize: '28px',
          fontWeight: 'bold',
          color: theme.palette.secondary.light,
        }}
      >
        no data
      </Typography>
    </Box>
  );
};
