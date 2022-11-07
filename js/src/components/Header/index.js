import React from 'react';

import { useNavigate, } from 'react-router-dom';
import { Drawer } from './Drawer';
import { UiHeader, UiNavbar, UiLogo, UiNav, UiMuiTypography } from './Header.style';
import {
  AppBar as MuiAppBar,
  Container as MuiContainer,
  Slide as MuiSlide,
  Toolbar as MuiToolbar,
  useMediaQuery,
  useScrollTrigger,
  useTheme,
} from '@mui/material';

const logo = 'YiChieh Chien';

export const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const navigate = useNavigate();
  const trigger = useScrollTrigger();

  const clickLogo = () => {
    navigate('/');
  };

  const clickSkills = () => {
    navigate('/skills');
  };

  const clickWorks = () => {
    navigate('/works');
  };

  const clickExperiences = () => {
    navigate('/experiences');
  };

  const clickCertificates = () => {
    navigate('/certificates');
  };

  const clickContact = () => {
    navigate('/contact');
  };



  // const clickSectionA = () => {
  //   const sectionA = document.getElementById('sectionA');
  //   const sectionId = 'sectionA';
  //   sectionA.scrollIntoView({ behavior: 'smooth' });
  //   navigate(`/section/${sectionId}`);
  // };

  return (
    <UiHeader>
      <MuiSlide appear={false} direction="down" in={!trigger}>
        <MuiAppBar style={{ backgroundColor: 'rgba(255, 255, 255, 0.5)'}}>
          <MuiContainer maxWidth='lg'>
            <MuiToolbar>
              <UiNavbar>
                <UiLogo onClick={clickLogo}>
                  {logo}
                </UiLogo>
                {
                  isMobile
                    ? <Drawer />
                    : <UiNav>
                        <UiMuiTypography onClick={clickSkills}>Skills</UiMuiTypography>
                        <UiMuiTypography onClick={clickWorks}>Works</UiMuiTypography>
                        <UiMuiTypography onClick={clickExperiences}>Experiences</UiMuiTypography>
                        <UiMuiTypography onClick={clickCertificates}>Certificates</UiMuiTypography>
                        <UiMuiTypography onClick={clickContact}>Contact</UiMuiTypography>
                      </UiNav>
                }
              </UiNavbar>
            </MuiToolbar>
          </MuiContainer>
        </MuiAppBar>
      </MuiSlide>
    </UiHeader>
  );
};
