import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  styled,
  Typography,
} from '@mui/material';

export const StyledRoot = styled('section')(({ theme }) => ({
  background: theme.palette.secondary.light,
  padding: '100px 20px',
  textAlign: 'center',
}));

export const StyledListWrapper = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledAccordion = styled(Accordion)(({ theme }) => ({
  borderLeft: '4px solid #FFF',
  width: `clamp(${'300px, 60vw ,800px'})`,
  transition: '0.2s',

  '&.MuiAccordion-root': {
    ':first-child': {
      borderRadius: '10px 10px 0 0',
    },
    ':last-child': {
      borderRadius: '0 0 10px 10px',
    },
    '&.Mui-expanded': {
      borderLeft: `4px solid ${theme.palette.primary.main}`,
    },
  },

  '&.MuiAccordion-root.Mui-expanded': {
    margin: 0,
  },
}));

export const StyledAccordionSummary = styled(AccordionSummary, {
  shouldForwardProp: (props) => props !== 'expanded'
})<{
  expanded: boolean,
}>(({ theme, expanded }) => ({  
  '&.MuiAccordionSummary-root': {
    padding: '8px 32px',
    textAlign: 'left',
  },

  '& .MuiAccordionSummary-expandIconWrapper': {
    border: '1px solid #EEE',
    borderRadius: '50%',
    boxShadow: '0px 0px 5px #DDD',
    background: expanded && theme.palette.primary.main,
    alignItems: 'center',
    justifyContent: 'center',

    '&.Mui-expanded': {
      width: '30px',
      height: '30px',
    }
  }
}));
export const StyledListItemTitle = styled(Typography)`
  &.MuiTypography-root{
    font-size: 16px;
    font-weight: 500;
  }
`;

export const StyledAccordionDetails = styled(AccordionDetails)`
  background: #F8F8FA;
`;

export const StyledImg = styled('img')`
  max-width: 100%;
  max-height: 500px;
  object-fit: cover;
`;