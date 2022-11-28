import { Card, CardMedia, IconButton, styled } from '@mui/material';

export const StyledRoot = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '100px 20px',
  textAlign: 'center',
}));

export const StyledCardWrapper = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '30px',
}));

export const StyledCard = styled(Card)(() => ({
  '&.MuiCard-root': {
    width: `clamp(${`300px, calc(${'100vw - 40px'}), 600px`})`,
  },
}));

export const StyledCardMedia = styled(CardMedia)(() => ({
  maxHeight: '300px',
  objectPosition: 'top',
})) as typeof CardMedia;

export const StyledIconButtonExpandMore = styled(IconButton, {
  shouldForwardProp: (props) => props !== 'expanded',
})<{
  expanded: number;
}>(({ expanded }) => ({
  '&.MuiButtonBase-root': {
    transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
    '&:not(:first-of-type)': {
      marginLeft: 'auto',
    },
  },
}));
