import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaRequestForm } from '../../../const/shema';
import { HFAutocompleate } from '../../Common/Inputs/HookFormInputs/HFAutocompleate';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import {
  Stack,
  Paper,
  Box,
  FormControlLabel,
  Button,
  Switch,
} from '@mui/material';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { ISelect } from 'interfaces/component';
import { getAllSpots } from 'services/api/spot/spotAPI';
import { formatEqptsSelector, formatSpotSelector } from 'services/helpers';
import { HFSelect } from 'components/Common/Inputs/HookFormInputs/HFSelect';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';

interface IProposalForm {
  allday: boolean;
  time: any;
  date: any;
  spot: ISelect[];
  eqpts: any;
  is_phone: boolean;
  auto_accept: boolean;
}

export const ProposalForm = () => {
  const [spots, setSpots] = useState<ISelect[]>([]);
  const { eqpts } = useTypeSelector(selectUser);

  const { handleSubmit, watch, control } = useForm<IProposalForm>({
    defaultValues: {
      allday: false,
      time: dayjs(),
      date: dayjs(),
      auto_accept: false,
      is_phone: false,
    },
    resolver: yupResolver(schemaRequestForm) as any,
  });

  useEffect(() => {
    async function getSpots() {
      try {
        const { data } = await getAllSpots();
        setSpots(formatSpotSelector(data.spots));
      } catch (error) {}
    }

    getSpots();
  }, []);

  const onSubmit: SubmitHandler<IProposalForm> = data => console.log(data);

  const isCheckedAllDay = watch('allday');

  return (
    <Paper
      elevation={3}
      style={{
        position: 'relative',
        padding: '18px',
      }}
    >
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
            render={({ field }) => (
              <MobileTimePicker
                {...field}
                label="Time"
                disabled={isCheckedAllDay}
                ampm={false}
              />
            )}
          />

          <HFAutocompleate
            multiple={false}
            control={control}
            name="spot"
            label="Spot"
            options={spots}
          />

          <HFSelect
            multiple={true}
            control={control}
            name="eqpts"
            label="Equipments"
            options={formatEqptsSelector(eqpts)}
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
          </Stack>
        </Box>
      </form>
    </Paper>
  );
};
