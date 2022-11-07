import { Typography } from '@mui/material';
import styled from 'styled-components';

export const UiFooter = styled('footer')`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 36px 0;
`;

export const UiLogo= styled.div`
  color: #FE9010;
  cursor: pointer;
  font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
  font-size: 1.8rem;
`;

export const UiContacts = styled.div`
  display: flex;
  gap: 12px;

  & .MuiSvgIcon-root {
    font-size: 2rem;
    &:hover {
      color: #FE9010;
      cursor: pointer;
      transition: 0.2s;
    };
  };
`;

export const UiCopyright = styled(Typography)`
  &.MuiTypography-root {
    color: #333;
    font-family: Montserrat, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 14px;
  }
`;