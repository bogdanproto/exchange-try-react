import { Stack, Button } from '@mui/material';

type action = 'accept' | 'reject';

export const CardOwnerControl = () => {
  const handleClick = (action: action) => {
    console.log(action);
  };
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Button
        onClick={() => handleClick('accept')}
        style={{ height: '20px' }}
        size="small"
        type="button"
        variant="contained"
        color="secondary"
      >
        ACCEPT
      </Button>

      <Button
        onClick={() => handleClick('reject')}
        style={{ height: '20px' }}
        size="small"
        type="button"
        variant="contained"
        color="secondary"
      >
        REJECT
      </Button>
    </Stack>
  );
};
