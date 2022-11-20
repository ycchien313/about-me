import { styled } from '@mui/material';

export const StyledContainer = styled('div')(({ theme }) => ({
  background: theme.palette.primary.main,
  color: '#FFF',
  borderRadius: '5px',
  cursor: 'pointer',
  padding: '6px 6px 2px 6px',
}));