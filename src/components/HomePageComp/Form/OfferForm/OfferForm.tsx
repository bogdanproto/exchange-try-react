import dayjs from 'dayjs';
import { useEffect } from 'react';
import { selectUser } from 'services/redux/auth/selectors';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { Paper, Box, TextField } from '@mui/material';
import { MobileTimePicker } from '@mui/x-date-pickers';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { ButtonForm, ErrorInputForm, HFSelect } from 'components/Common';
import { formatEqptsSelector } from 'services/helpers';
import { IOfferForm } from 'interfaces';
import { schemaOfferForm } from 'const';
import { yupResolver } from '@hookform/resolvers/yup';
import { toFormatProposalObjByCustomer } from 'services/helpers/form/toFormatProposalObjByCustomer';
import { updateProposalByCustomer } from 'services/redux/data/operations';

interface IOfferFormProps {
  handleExpandClose: () => void;
  _id: string;
  customerEqpts?: string[];
  customerTime?: any;
  customerMsg?: any;
}

export const OfferForm: React.FC<IOfferFormProps> = ({
  handleExpandClose,
  _id,
  customerEqpts,
  customerTime,
  customerMsg,
}) => {
  const dispatch = useTypeDispatch();
  const { eqpts } = useTypeSelector(selectUser);

  const {
    handleSubmit,
    reset,
    control,
    formState: { isSubmitSuccessful, errors },
  } = useForm<IOfferForm>({
    defaultValues: {
      time: customerTime ? dayjs(customerTime, 'HH:mm') : dayjs(),
      message: customerMsg ?? '',
    },
    resolver: yupResolver(schemaOfferForm),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit: SubmitHandler<IOfferForm> = data => {
    const prepareData = toFormatProposalObjByCustomer(data);

    dispatch(updateProposalByCustomer({ ...prepareData, _id }));
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
              defaultValue={customerEqpts}
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

          <ButtonForm
            mainBtn={customerEqpts ? 'UPDATE' : 'OFFER'}
            secondaryBtn={'CLOSE'}
            handleSecondary={handleExpandClose}
          />
        </Box>
      </form>
    </Paper>
  );
};
