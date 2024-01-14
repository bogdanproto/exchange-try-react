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
import {
  selectFilterProposal,
  selectSpots,
} from 'services/redux/data/selectors';
import { toFilterProposals } from 'services/redux/data/slice/dataSlice';

export const FilterProposals = () => {
  const dispatch = useTypeDispatch();
  const spots = useTypeSelector(selectSpots);
  const currentFilter = useTypeSelector(selectFilterProposal);
  const [filter, setFilter] = useState<boolean>(
    currentFilter.spot === null && currentFilter.date === null ? false : true
  );
  const [spot, setSpot] = useState<ISpot | null>(currentFilter.spot);
  const [date, setDate] = React.useState<Dayjs | null>(
    currentFilter.date ? dayjs(currentFilter.date, 'YYYY-MM-DD') : null
  );

  useEffect(() => {
    if (!spots.length) {
      dispatch(getAllSpots());
    }
  }, [dispatch, spots.length]);

  useEffect(() => {
    if ((!filter && !spot && !date) || (filter && !spot && !date)) {
      return;
    }

    if (!filter) {
      setSpot(_ => null);
      setDate(_ => null);
    }

    dispatch(
      toFilterProposals({
        spot: filter ? spot : null,
        date: filter && date ? dayjs(date).format('YYYY-MM-DD') : null,
      })
    );
  }, [date, dispatch, filter, spot]);

  const handleChangeSwitch = () => {
    setFilter(!filter);
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
        value={filter ? spot : null}
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
        value={filter ? date : null}
        minDate={dayjs()}
        format="DD-MM-YYYY"
        onAccept={newValue => setDate(newValue)}
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
