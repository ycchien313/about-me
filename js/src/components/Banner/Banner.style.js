import { Button } from '@mui/material';
import styled from 'styled-components';

export const UiBanner = styled.section`
  height: 100vh;
  background-image: url('/src/assets/banners/banner1.jpg');
  background-position: top calc(764 / 1100 * 100%) center;
  background-repeat: no-repeat;
  background-size: cover;
  padding-top: calc(764 / 1100 * 100);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const UiTextWrapper = styled.div`
  margin-bottom: 40px;
  padding: 1rem;
`;

export const UiPrefix = styled.div`
  /* color: #B8C1C7; */
  /* color: #FE9010; */
  color: #011E51;
  font-family: Roboto;
  font-size: clamp(1rem, 7vw, 2.5rem);
`;

export const UiTitle = styled.div`
  /* color: #011E51; */
  color: #FFF;
  font-family: Roboto;
  font-style: italic;
  font-size: clamp(2.5rem, 10vw, 5rem)
`;

export const UiSubtitle = styled.div`
  color: #FFF;
  font-family: Roboto;
  font-size: clamp(1rem, 7vw, 2.5rem);
`;

export const UiActionWrapper = styled.div`
`;

export const UiAction = styled(Button)`
  &.MuiButton-root {
    background: #FE9010;
    border-radius: 5px;
    box-shadow: 3px 10px 2px 1px rgba(0, 0, 0, 0.3);
    color: #FFF;
    cursor: pointer;
    font-size: 2rem;
    padding: 10px 30px;

    &:hover {
      background: #FE9F00;
    }
  };
`;