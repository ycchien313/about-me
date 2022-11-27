import { ReactElement } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledAction,
  StyledPrefix,
  StyledRoot,
  StyledSubtitle,
  StyledTextWrapper,
  StyledTitle,
} from './Banner.style';

const PREFIX = 'Hi There';
const TITLE = "I'm YiChieh Chien";
const SUBTITLE = "It's nice to meet you";
const ACTION_TEXT = 'Know me more';

export default (): ReactElement => {
  const navigate = useNavigate();

  return (
    <StyledRoot>
      <StyledTextWrapper>
        <StyledPrefix>{PREFIX}</StyledPrefix>
        <StyledTitle>{TITLE}</StyledTitle>
        <StyledSubtitle>{SUBTITLE}</StyledSubtitle>
      </StyledTextWrapper>
      <div>
        <StyledAction onClick={() => navigate('/skills')}>
          {ACTION_TEXT}
        </StyledAction>
      </div>
    </StyledRoot>
  );
};
