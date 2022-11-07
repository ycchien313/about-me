import { Email, GitHub } from '@mui/icons-material';
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  UiFooter,
  UiLogo,
  UiContacts,
  UiCopyright,
} from './Footer.style';

const LOGO = 'YiChieh Chien';
const COPYRIGHT = 'Copyright © YiChieh Chien';
const EMAIL = 'chien313jay@gmail.com';

export const Footer = forwardRef(( props, ref ) => {
  const navigate = useNavigate();

  const contactFuncs = {
    clickGitHub: () => {
      window.open('https://github.com/ycchien313', '_blank');
    },
    clickEmail: () => {
      const link = document.createElement('a');
      link.href = `mailto:${EMAIL}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    },
  };

  const clickLogo = () => {
    navigate('/');
  };

  return (
    <UiFooter ref={ref}>
      <UiLogo onClick={clickLogo}>{LOGO}</UiLogo>
      <UiContacts>
        <GitHub onClick={contactFuncs.clickGitHub} />
        <Email onClick={contactFuncs.clickEmail} />
      </UiContacts>
      <UiCopyright>{COPYRIGHT}</UiCopyright>
    </UiFooter>
  );
});