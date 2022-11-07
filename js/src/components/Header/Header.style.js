import styled from 'styled-components';
import { Typography as MuiTypography } from '@mui/material';

export const UiHeader = styled.div`
`;

export const UiNavbar = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: space-between;
`;

export const UiLogo= styled.div`
  color: #FE9010;
  cursor: pointer;
  font-family: "Kaushan Script", "Helvetica Neue", Helvetica, Arial, cursive;
  font-size: 1.8rem;
`;

export const UiNav = styled.div`
  display: flex;

  & > .MuiTypography-root{
    color: #011E51;
    cursor: pointer;
    font-size: 1.1rem;
    margin-right: 1.9rem;
  };

  & > .MuiTypography-root:hover{
    color: #FE9010;
    transition: 0.15s;
  };
`;

export const UiMuiTypography = styled(MuiTypography)`
`;