import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schemaProposalForm } from 'const/shema';
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
import { IProposalForm } from 'interfaces/component';
import { getAllSpots } from 'services/api/spot/spotAPI';
import { formatEqptsSelector, formatSpotSelector } from 'services/helpers';
import { HFSelect } from 'components/Common/Inputs/HookFormInputs/HFSelect';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { ErrorInputForm } from 'components/Common/Error/ErrorInputForm.styled';
import { ISpot } from 'interfaces/data';

export const ProposalForm = () => {
  const [spots, setSpots] = useState<ISpot[]>([]);
  const { eqpts } = useTypeSelector(selectUser);

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IProposalForm>({
    defaultValues: {
      allday: false,
      time: dayjs(),
      date: dayjs(),
      auto_accept: false,
      is_phone: false,
    },
    resolver: yupResolver(schemaProposalForm),
  });

  useEffect(() => {
    async function getSpots() {
      try {
        const { data } = await getAllSpots();
        setSpots(data.spots);
      } catch (error) {}
    }

    getSpots();
  }, []);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IProposalForm> = data => {
    console.log(data);
  };

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
                control={
                  <Switch {...field} checked={field.value} size="small" />
                }
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
          {/* <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <HFAutocompleate
              multiple={false}
              control={control}
              name="spot"
              label="Spot"
              options={spots}
            />
            <ErrorInputForm>{errors.spot?.label?.message}</ErrorInputForm>
          </Box> */}

          <Box
            style={{
              marginBottom: '4px',
            }}
          >
            <HFSelect
              multiple={false}
              control={control}
              name="spot"
              label="Spot"
              placeholder="Add equipment to your profile"
              options={formatSpotSelector(spots)}
            />
            <ErrorInputForm>{errors.spot?.message}</ErrorInputForm>
          </Box>

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

          <Box>
            <Controller
              name="is_phone"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Switch checked={field.value} {...field} />}
                  label="Show my phone number"
                />
              )}
            />

            <Controller
              name="auto_accept"
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  control={<Switch {...field} checked={field.value} />}
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
