import { CardContent, CardActions, Collapse, styled } from '@mui/material';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AbcIcon from '@mui/icons-material/Abc';
import { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { OfferForm } from '../OfferForm/OfferForm';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} style={{ padding: '0' }} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export const CardControl = () => {
  const [expanded, setExpanded] = useState(false);
  const [switchCollaps, setswitchCollaps] = useState('form');

  const handleExpandClick = () => {
    setswitchCollaps('form');
    setExpanded(!expanded);
  };
  const handleMoreInfoClick = () => {
    setswitchCollaps('more');
    setExpanded(!expanded);
  };
  return (
    <>
      <CardActions disableSpacing style={{ padding: '4px' }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
        >
          <ExpandMoreIcon />
        </ExpandMore>
        <IconButton onClick={handleMoreInfoClick}>
          <AbcIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent
          style={{
            padding: '0 14px 14px 14px',
          }}
        >
          {switchCollaps === 'form' ? (
            <OfferForm handleExpandClick={handleExpandClick} />
          ) : (
            <p>test</p>
          )}
        </CardContent>
      </Collapse>
    </>
  );
};
