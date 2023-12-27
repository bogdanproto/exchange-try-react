import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { MobileDatePicker, MobileTimePicker } from '@mui/x-date-pickers';
import { Paper, Box, FormControlLabel, Switch, TextField } from '@mui/material';
import dayjs from 'dayjs';
import { useEffect } from 'react';
import {
  formatEqptsSelector,
  formatSpotSelector,
  toFormatProposalObj,
} from 'services/helpers';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { createProposal, getAllSpots } from 'services/redux/data/operations';
import { selectSpots } from 'services/redux/data/selectors';
import { IProposalForm } from 'interfaces';
import { schemaProposalForm } from 'const';
import { ButtonForm, ErrorInputForm, HFSelect } from 'components/Common';

interface IProposalFormProps {
  _id?: string;
  ownerTime?: any;
  ownerDate?: any;
  ownerSpot?: string[];
  ownerEqpts?: string[];
  ownerMsg?: any;
  ownerisShowPhone?: boolean;
  ownerisAutoAccept?: boolean;
  handleExpandClose?: () => void;
}

export const ProposalForm: React.FC<IProposalFormProps> = ({
  _id,
  ownerTime,
  ownerDate,
  ownerSpot,
  ownerEqpts,
  ownerMsg,
  ownerisShowPhone,
  ownerisAutoAccept,
  handleExpandClose,
}) => {
  const dispatch = useTypeDispatch();
  const { eqpts } = useTypeSelector(selectUser);
  const spots = useTypeSelector(selectSpots);

  const {
    handleSubmit,
    watch,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IProposalForm>({
    defaultValues: {
      allday: ownerTime === 'allday' ? true : false,
      time:
        ownerTime !== 'allday' && ownerTime
          ? dayjs(ownerTime, 'HH:mm')
          : dayjs(),
      date: ownerDate ? dayjs(ownerDate) : dayjs(),
      auto_accept: ownerisAutoAccept ?? false,
      message: ownerMsg ?? '',
      is_phone: ownerisShowPhone ?? false,
    },
    resolver: yupResolver(schemaProposalForm),
  });

  useEffect(() => {
    if (!spots.length) {
      dispatch(getAllSpots());
    }
  }, [dispatch, spots.length]);

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IProposalForm> = data => {
    if (_id) {
      console.log(data);
      return;
    }
    const prepareData = toFormatProposalObj(data);
    dispatch(createProposal(prepareData));
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
          <Box
            style={{
              paddingTop: '2px',
            }}
            sx={{
              display: 'flex',

              alignItems: 'center',
              gap: '4px',
            }}
          >
            <Controller
              name="date"
              control={control}
              render={({ field }) => (
                <MobileDatePicker
                  {...field}
                  minDate={dayjs()}
                  label="Date"
                  sx={{ width: '100%' }}
                  format="DD.MM.YYYY"
                />
              )}
            />

            <Controller
              name="time"
              control={control}
              render={({ field }) => (
                <MobileTimePicker
                  {...field}
                  value={
                    isCheckedAllDay
                      ? dayjs().startOf('day').toDate()
                      : field.value
                  }
                  label="Time"
                  disabled={isCheckedAllDay}
                  ampm={false}
                  sx={{ width: '96px' }}
                />
              )}
            />
          </Box>
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
              placeholder="Spots wasn't loaded"
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
              defaultValue={ownerEqpts}
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
          <ButtonForm
            mainBtn={_id ? 'UPGRADE' : 'SUBMIT'}
            secondaryBtn={_id && 'CLOSE'}
            handleSecondary={handleExpandClose}
          />
        </Box>
      </form>
    </Paper>
  );
};
