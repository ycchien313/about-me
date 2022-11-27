import { styled, Typography } from '@mui/material';

export const StyledSectionTitle = styled(Typography)(() => ({
  '&.MuiTypography-root': {
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: '500',
    marginBottom: '26px'
  }
}));
