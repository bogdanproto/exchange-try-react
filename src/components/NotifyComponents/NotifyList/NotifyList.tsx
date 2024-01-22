import { Box } from '@mui/material';
import { INotify } from 'interfaces';
import { NotifyCard } from '../NotifyCard/NotifyCard';

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
      {items.map(({ _id, message, statusNotify, createdAt }) => (
        <NotifyCard
          key={_id}
          _id={_id}
          message={message}
          statusNotify={statusNotify}
          createdAt={createdAt}
        />
      ))}
    </Box>
  );
};
