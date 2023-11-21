import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { Switch } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRequestForm } from '../../../const/shema';
import { HFAutocompleate } from '../../Common/Inputs/HookFormInputs/HFAutocompleate';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import {
  Stack,
  Paper,
  Typography,
  Box,
  FormControlLabel,
  Button,
} from '@mui/material';
import dayjs from 'dayjs';

interface IRequestForm {
  allday: boolean;
  time: any;
  date: any;
  spot: string;
  is_phone: boolean;
  auto_accept: boolean;
}

const optionsSpot = [
  { id: '1', label: 'tarifa' },
  { id: '2', label: 'wissant' },
];
const optionsEqpt = [
  { id: '1', label: 'Naish Pivot 8' },
  { id: '2', label: 'Core XR 10' },
  { id: '3', label: 'Naish Pivot 18' },
  { id: '4', label: 'Core XR 11' },
  { id: '5', label: 'Naish Pivot 28' },
  { id: '6', label: 'Core XR 210' },
  { id: '7', label: 'Naish Pivot 38' },
  { id: '8', label: 'Core XR 310' },
];

export const RequestForm = () => {
  const { handleSubmit, control } = useForm<IRequestForm>({
    defaultValues: {
      allday: false,
      time: dayjs(),
      date: dayjs(),
      auto_accept: false,
      is_phone: false,
    },
    resolver: yupResolver(schemaRequestForm) as any,
  });

  const onSubmit: SubmitHandler<IRequestForm> = data => console.log(data);

  return (
    <Paper
      elevation={3}
      style={{
        position: 'relative',
        padding: '24px',
      }}
    >
      <Typography
        style={{
          position: 'absolute',
          top: '0',
          left: '0',
          padding: '0 5px',
        }}
      >
        NEW REQUEST
      </Typography>

      <form onSubmit={handleSubmit(onSubmit)}>
        <Box
          style={{
            position: 'relative',
            paddingTop: '24px',
          }}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Controller
            name="allday"
            control={control}
            render={({ field }) => (
              <FormControlLabel
                style={{
                  position: 'absolute',
                  top: '-8px',
                  right: '2px',
                  padding: '4px',
                }}
                control={<Switch {...field} size="small" />}
                label="ALLDAY"
                labelPlacement="start"
              />
            )}
          />
          <Controller
            name="date"
            control={control}
            render={({ field }) => (
              <MobileDatePicker
                {...field}
                label="Date"
                sx={{ width: '100%' }}
              />
            )}
          />

          <Controller
            name="time"
            control={control}
            render={({ field }) => <MobileTimePicker {...field} label="Time" />}
          />

          <HFAutocompleate
            multiple={false}
            control={control}
            name="spot"
            label="Spot"
            options={optionsSpot}
          />

          <HFAutocompleate
            multiple={true}
            control={control}
            name="eqpt"
            label="Equipment"
            options={optionsEqpt}
          />
          <Box>
            <Controller
              name="is_phone"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Switch {...field} />}
                  label="Show my phone number"
                />
              )}
            />

            <Controller
              name="auto_accept"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Switch {...field} />}
                  label="Auto accept"
                  color="primary"
                />
              )}
            />
          </Box>
          <Stack
            spacing={2}
            direction="row"
            sx={{ display: 'flex', justifyContent: 'space-around' }}
          >
            <Button type="submit" variant="contained">
              SUBMIT
            </Button>
            <Button variant="contained">CANCEL</Button>
          </Stack>
        </Box>
      </form>
    </Paper>
  );
};
