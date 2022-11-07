import styled from 'styled-components';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';

export const UiRoot = styled.section`
  background: #FEFCF7;
  padding: 100px 20px;
  text-align: center;
`;

export const UiListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UiAccordion = styled(Accordion)`
  width: clamp(300px, 60vw ,800px);

  &.MuiAccordion-root {
    :first-child {
      border-radius: 10px 10px 0 0;
    };
    :last-child {
      border-radius: 0 0 10px 10px;
    };
    &.Mui-expanded {
      border-left: 4px solid #FE9010;
    }
  }

  &.MuiAccordion-root.Mui-expanded {
    margin: 0;
  };
`;

export const UiAccordionSummary = styled(AccordionSummary)`  
  &.MuiAccordionSummary-root {
    padding: 8px 32px;
    text-align: left;
  };

  & .MuiAccordionSummary-expandIconWrapper {
    border: 1px solid #EEE;
    border-radius: 50%;
    box-shadow: 0px 0px 5px #DDD;
    background: ${({ expanded }) => expanded === 'true' && '#FE9010'} ;
    align-items: center;
    justify-content: center;

    &.Mui-expanded {
      width: 30px;
      height: 30px;
    }
  };
`;
export const UiListItemTitle = styled(Typography)`
  &.MuiTypography-root{
    font-size: 16px;
    font-weight: 500;
  }
`;

export const UiAccordionDetails = styled(AccordionDetails)`
  background: #F8F8FA;
`;

export const UiImg = styled('img')`
  max-width: 100%;
  max-height: 500px;
  object-fit: cover;
`;