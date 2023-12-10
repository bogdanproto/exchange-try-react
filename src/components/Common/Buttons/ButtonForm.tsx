import { Stack, Button } from '@mui/material';

export interface IButtonForm {
  name: string;
}

export const ButtonForm = ({ name }: IButtonForm) => {
  return (
    <Stack
      style={{
        marginTop: '18px',
      }}
      spacing={2}
      direction="row"
      sx={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Button type="submit" variant="contained">
        {name}
      </Button>
    </Stack>
  );
};
