import {
  CardContent,
  CardActions,
  Collapse,
  Typography,
  Button,
} from '@mui/material';

import { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { useTypeSelector } from 'services/redux/customHook/typeHooks';
import { selectUser } from 'services/redux/auth/selectors';
import { CancelForm } from '../../Form/CancelForm/CancelForm';
import { getRestOfDays } from 'services/helpers';

interface ICardControlAcceptedProps {
  _id: string;
  ownerDate: any;
}

export const CardControlAccepted = ({
  _id,
  ownerDate,
}: ICardControlAcceptedProps) => {
  const theme = useTheme();
  const [expanded, setExpanded] = useState(false);
  const { _id: userId } = useTypeSelector(selectUser);

  const handleExpandMore = () => {
    setExpanded(!expanded);
  };

  const restDays = getRestOfDays(ownerDate);

  return (
    <>
      <CardActions
        disableSpacing
        style={{
          height: '34px',
          padding: '6px 8px 6px 8px',
          justifyContent: 'space-between',
          backgroundColor: theme.palette.info.main,
        }}
      >
        <Typography
          variant="overline"
          style={{ lineHeight: '1.2', fontSize: '14px' }}
        >
          {restDays}
        </Typography>

        <Button
          onClick={handleExpandMore}
          style={{ height: '22px' }}
          size="small"
          type="button"
          variant="contained"
          color="secondary"
        >
          CANCEL
        </Button>
      </CardActions>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '8px',
          }}
        >
          {expanded && (
            <CancelForm
              handleExpandClose={handleExpandMore}
              _id={_id}
              userId={userId}
            />
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
