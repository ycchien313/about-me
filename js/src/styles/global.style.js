import { Typography as MuiTypography } from '@mui/material';
import { withStyles } from '@mui/styles';

export const UiGlobalTitle = withStyles(() => ({
  root: {
    color: '#333',
    fontSize: '2.5rem',
    fontWeight: '500',
    marginBottom: '26px'
  }
}))(MuiTypography);
