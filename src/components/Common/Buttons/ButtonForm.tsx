import { Stack, Button } from '@mui/material';

export interface IButtonForm {
  mainBtn?: string;
  secondaryBtn?: string;
  handleSecondary?: () => void;
}

export const ButtonForm = ({
  mainBtn,
  secondaryBtn,
  handleSecondary,
}: IButtonForm) => {
  return (
    <Stack
      spacing={2}
      direction="row"
      sx={{ display: 'flex', justifyContent: 'space-around' }}
    >
      <Button type="submit" variant="contained">
        {mainBtn}
      </Button>
      {secondaryBtn && (
        <Button type="button" variant="contained" onClick={handleSecondary}>
          {secondaryBtn}
        </Button>
      )}
    </Stack>
  );
};
