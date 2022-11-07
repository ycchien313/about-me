import styled from 'styled-components';
import {
  Card as MuiCard,
  CardActions as MuiCardActions,
  CardContent as MuiCardContent,
  CardMedia as MuiCardMedia,
  IconButton as MuiIconButton,
  Typography as MuiTypography,
} from '@mui/material';
import { withStyles } from '@mui/styles';

export const UiWorks = styled.section`
  background: #FEFCF7;
  padding: 100px 20px;
  text-align: center;
`;

export const UiCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const UiMuiCard = withStyles(() => ({
  root: {
    // width: 'clamp(300px, 600px, 600px)'
    width: 'clamp(300px, calc(100vw - 40px), 600px)'
  }
}))(MuiCard);


export const UiMuiCardMedia = styled(MuiCardMedia)`
  max-height: 300px;
  object-position: top;
  
`;

export const UiMuiCardActions = styled(MuiCardActions)`
`;

export const UiMuiIconButtonExpandMore = withStyles((theme) => ({
  root: {
    transform: props => props.expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    '&:not(:first-of-type)': {
      marginLeft: 'auto'
    }
  }
}))(MuiIconButton);

export const UiMuiCardContent = styled(MuiCardContent)`
`;

export const UiMuiTypography = styled(MuiTypography)`
`;

