import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Card, Box } from '@mui/material';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ProposalForm } from 'components/ProposalPageComp/ProposalForm/ProposalForm';
import { useTheme } from '@mui/material/styles';

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

export function Proposals() {
  const theme = useTheme();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ borderRadius: '10px' }}>
      <CardContent style={{ padding: '8px' }}>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Box
            display="flex"
            gap="6px"
            justifyContent="left"
            alignItems="center"
          >
            <Avatar aria-label="avatar" />
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="left"
              alignItems="left"
            >
              <Typography
                variant="overline"
                style={{ lineHeight: '1.0', fontSize: '12px' }}
              >
                Max Sapolsky
              </Typography>
              <Typography
                variant="caption"
                color="text.secondary"
                style={{ fontSize: '10px' }}
              >
                10 years expirience
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="left"
            alignItems="left"
          >
            <Typography
              variant="overline"
              style={{ lineHeight: '1.2', fontSize: '14px' }}
            >
              10.09.2024 10:00
            </Typography>
            <Typography
              variant="overline"
              style={{ lineHeight: '1.1', fontSize: '14px' }}
            >
              tarifa
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardContent
        style={{
          padding: '16px',
          backgroundColor: theme.palette.info.main,
          borderRadius: '0 0 6px 6px',
        }}
      >
        <Typography variant="body2" color="text.secondary">
          Kite Core XR 12, Kiteboard Core Fusion 136
        </Typography>
      </CardContent>
      <CardActions disableSpacing style={{ padding: '4px' }}>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <ProposalForm />
        </CardContent>
      </Collapse>
    </Card>
  );
}
