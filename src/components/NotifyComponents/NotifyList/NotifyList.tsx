import { Box } from '@mui/material';
import { INotify } from 'interfaces';
import { NotifyCard } from '../NotifyCard/NotifyCard';
import { NoData, ObseverNotify } from 'components/Common';

interface INotifyListProps {
  items: INotify[] | [];
}

export const NotifyList = ({ items }: INotifyListProps) => {
  return (
    <Box
      display={'flex'}
      flexDirection={'column'}
      gap={'8px'}
      sx={{ paddingTop: '8px' }}
    >
      {items.length > 0 ? (
        items.map(({ _id, initiator, message, statusNotify, createdAt }) => (
          <NotifyCard
            key={_id}
            _id={_id}
            initiator={initiator}
            message={message}
            statusNotify={statusNotify}
            createdAt={createdAt}
          />
        ))
      ) : (
        <NoData />
      )}
      <ObseverNotify />
    </Box>
  );
};
