import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UiBanner,
  UiTextWrapper,
  UiPrefix, UiTitle,
  UiSubtitle,
  UiActionWrapper,
  UiAction,
} from './Banner.style';

const prefix = 'Hi There';
const title = 'I\'m YiChieh Chien';
const subtitle = 'It\'s nice to meet you';
const action = 'Know me more';

export const Banner = () => {
  const navigate = useNavigate();

  const clickMore = () => {
    navigate('/skills');
  };

  return (
    <UiBanner>
      <UiTextWrapper>
        <UiPrefix>{prefix}</UiPrefix>
        <UiTitle>{title}</UiTitle>
        <UiSubtitle>{subtitle}</UiSubtitle>
      </UiTextWrapper>
      <UiActionWrapper>
        <UiAction onClick={clickMore}>{action}</UiAction>
      </UiActionWrapper>
    </UiBanner>
  );
};
