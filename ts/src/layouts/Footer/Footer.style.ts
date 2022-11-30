import { styled, Typography } from '@mui/material';

export const StyledRoot = styled('footer')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 36px 0;
`;

export const StyledLogo= styled('div')(({ theme }) => ({
  color: theme.palette.primary.main,
  cursor: 'pointer',
  fontFamily: 'Kaushan Script, Helvetica Neue, Helvetica, Arial, cursive',
  fontSize: '1.8rem',
}));

export const StyledContacts = styled('div')(({ theme }) => ({
  display: 'flex',
  gap: '12px',
  color: theme.palette.secondary.main,

  '& .MuiSvgIcon-root': {
    fontSize: '2rem',
    '&:hover': {
      color: theme.palette.primary.main,
      cursor: 'pointer',
      transition: '0.2s',
    },
  },
}));

export const StyledCopyright = styled(Typography)(({ theme }) => ({
  '&.MuiTypography-root': {
    color: theme.palette.secondary.main,
    fontFamily: 'Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif',
    fontSize: '14px',
  }
}));