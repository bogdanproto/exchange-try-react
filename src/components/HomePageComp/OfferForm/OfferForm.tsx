import dayjs from 'dayjs';
import { useEffect } from 'react';
import { selectUser } from 'services/redux/auth/selectors';
import {
  //   useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { Paper, Box, TextField, Stack, Button } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ErrorInputForm, HFSelect } from 'components/Common';
import { formatEqptsSelector } from 'services/helpers';
import { IOfferForm } from 'interfaces';
import { schemaOfferForm } from 'const';
import { yupResolver } from '@hookform/resolvers/yup';

interface IOfferFormProps {
  handleExpandClose: () => void;
  _id: string;
}

export const OfferForm: React.FC<IOfferFormProps> = ({
  handleExpandClose,
  _id,
}) => {
  //   const dispatch = useTypeDispatch();
  const { eqpts } = useTypeSelector(selectUser);

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IOfferForm>({
    defaultValues: {
      time: dayjs(),
      message: '',
    },
    resolver: yupResolver(schemaOfferForm),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IOfferForm> = data => {
    console.log(data);
    console.log(_id);
    // const prepareData = toFormatProposalObj(data);
    // dispatch(createProposal(prepareData));
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
            gap: '16px',
          }}
        >
          <Controller
            name="time"
            control={control}
            render={({ field }) => (
              <MobileTimePicker {...field} label="Time" ampm={false} />
            )}
          />

          <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <HFSelect
              multiple={true}
              control={control}
              name="eqpts"
              label="Equipments"
              placeholder="Add equipment to your profile"
              options={formatEqptsSelector(eqpts)}
            />
            <ErrorInputForm>{errors.eqpts?.message}</ErrorInputForm>
          </Box>

          <Controller
            name="message"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                id="message"
                label="Message"
                multiline
                rows={3}
                size="small"
              />
            )}
          />

          <Stack
            spacing={2}
            direction="row"
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Button type="submit" variant="contained">
              OFFER
            </Button>
            <Button
              type="button"
              variant="contained"
              onClick={handleExpandClose}
            >
              CLOSE
            </Button>
          </Stack>
        </Box>
      </form>
    </Paper>
  );
};
