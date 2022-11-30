import { Email, GitHub } from '@mui/icons-material';
import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  StyledRoot,
  StyledLogo,
  StyledContacts,
  StyledCopyright,
} from './Footer.style';

const LOGO = 'YiChieh Chien';
const COPYRIGHT = 'Copyright © YiChieh Chien';
const EMAIL = 'chien313jay@gmail.com';

export default forwardRef<HTMLDivElement>(( props, ref ) => {
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

  const clickLogo = (): void => {
    navigate('/');
  };

  return (
    <StyledRoot ref={ref}>
      <StyledLogo onClick={clickLogo}>{LOGO}</StyledLogo>
      <StyledContacts>
        <GitHub onClick={contactFuncs.clickGitHub} />
        <Email onClick={contactFuncs.clickEmail} />
      </StyledContacts>
      <StyledCopyright>{COPYRIGHT}</StyledCopyright>
    </StyledRoot>
  );
});