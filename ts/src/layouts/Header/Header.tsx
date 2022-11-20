import { MobileContext } from 'contexts/Mobile/Mobile';
import { ReactElement, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  AppBar,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { StyledLogo, StyledNavbar, StyledNavItem, StyledNavMenu } from './Header.style';
import { Drawer } from './Drawer';

const LOGO = 'YiChieh Chien';

export default (): ReactElement => {
  const { isMobile } = useContext(MobileContext);
  const navigate = useNavigate();
  const trigger = useScrollTrigger();

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <Container maxWidth="lg">
            <Toolbar>
              <StyledNavbar>
                <StyledLogo onClick={() => navigate('/')}>{LOGO}</StyledLogo>
                {
                  isMobile
                    ? <Drawer />
                    : <StyledNavMenu>
                        <StyledNavItem onClick={() => navigate('/skills')}>Skills</StyledNavItem>
                        <StyledNavItem onClick={() => navigate('/works')}>Works</StyledNavItem>
                        <StyledNavItem onClick={() => navigate('/experiences')}>Experiences</StyledNavItem>
                        <StyledNavItem onClick={() => navigate('/certificates')}>Certificates</StyledNavItem>
                        <StyledNavItem onClick={() => navigate('/contact')}>Contact</StyledNavItem>
                      </StyledNavMenu>
                    }
              </StyledNavbar>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </>
  );
};
