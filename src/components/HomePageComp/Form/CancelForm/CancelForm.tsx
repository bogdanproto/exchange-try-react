import { useEffect } from 'react';
import { Paper, Box, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonForm, ErrorInputForm } from 'components/Common';
import { ICancelForm } from 'interfaces';
import { schemaCancelForm } from 'const';
import { yupResolver } from '@hookform/resolvers/yup';

interface ICancelFormProps {
  handleExpandClose: () => void;
  _id: string;
  userId: string;
}

export const CancelForm: React.FC<ICancelFormProps> = ({
  handleExpandClose,
  _id,
  userId,
}) => {
  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<ICancelForm>({
    defaultValues: {
      message: '',
    },
    resolver: yupResolver(schemaCancelForm),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<ICancelForm> = data => {
    console.log(data);
    handleExpandClose();
  };

  return (
    <Paper
      elevation={3}
      style={{
        padding: '18px',
        borderRadius: '10px',
      }}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '20px',
          }}
        >
          <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  id="message"
                  label="Reason for cancellation"
                  multiline
                  rows={3}
                  size="small"
                  style={{
                    width: '100%',
                  }}
                />
              )}
            />
            <ErrorInputForm>{errors.message?.message}</ErrorInputForm>
          </Box>

          <ButtonForm
            mainBtn={'CANCEL '}
            secondaryBtn={'CLOSE'}
            handleSecondary={handleExpandClose}
          />
        </Box>
      </form>
    </Paper>
  );
};
