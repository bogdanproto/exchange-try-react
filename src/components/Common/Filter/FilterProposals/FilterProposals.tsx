import { Switch, Box, Autocomplete, TextField } from '@mui/material';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { ISpot } from 'interfaces';
import React, { useEffect, useState } from 'react';
import {
  useTypeDispatch,
  useTypeSelector,
} from 'services/redux/customHook/typeHooks';
import { getAllSpots } from 'services/redux/data/operations';
import { selectSpots } from 'services/redux/data/selectors';
import { toFilterProposals } from 'services/redux/data/slice/dataSlice';

export const FilterProposals = () => {
  const dispatch = useTypeDispatch();
  const spots = useTypeSelector(selectSpots);
  const [filter, setFilter] = useState<boolean>(false);
  const [spot, setSpot] = useState<ISpot | null>(null);
  const [date, setData] = React.useState<Dayjs | null>(null);

  useEffect(() => {
    if (!spots.length) {
      dispatch(getAllSpots());
    }
  }, [dispatch, spots.length]);

  useEffect(() => {
    dispatch(
      toFilterProposals({
        spot,
        date: date ? dayjs(date).format('YYYY-MM-DD') : null,
      })
    );
  }, [date, dispatch, spot]);

  const handleChangeSwitch = () => {
    setFilter(!filter);
    setSpot(null);
    setData(null);
  };

  return (
    <Box
      display={'flex'}
      justifyContent={'space-between'}
      alignItems={'center'}
      gap={'4px'}
      style={{
        width: '100%',
        height: '46px',
        paddingTop: '4px',
        paddingBottom: '4px',
      }}
    >
      <Switch checked={filter} onChange={handleChangeSwitch} />

      <Autocomplete
        disabled={!filter}
        value={spot}
        onChange={(event: any, newValue: ISpot | null) => setSpot(newValue)}
        id="spot"
        options={spots}
        getOptionLabel={(option: ISpot) => option.spot.toUpperCase()}
        renderInput={params => <TextField {...params} placeholder="SPOT" />}
        sx={{
          width: 'calc(100% - 180px)',
          '.MuiInputBase-root': {
            height: '32px',
            padding: '0',
            fontSize: '14px',
            '.MuiAutocomplete-input': {
              padding: '4px 4px 4px 8px',
            },
          },
        }}
      />

      <MobileDatePicker
        disabled={!filter}
        value={date}
        format="DD-MM-YYYY"
        onAccept={newValue => setData(newValue)}
        sx={{
          width: '120px',
          '.MuiInputBase-root': {
            height: '32px',
            fontSize: '14px',
            width: '116px',
          },
        }}
      />
    </Box>
  );
};
