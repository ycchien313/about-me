import { MobileContext } from 'contexts/Mobile';
import { ReactElement, useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTheme } from '@mui/material';
import {
  AppBar,
  Container,
  Slide,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import {
  StyledLogo,
  StyledNavbar,
  StyledNavItem,
  StyledNavMenu,
} from './Header.style';
import { Drawer } from './Drawer';

const LOGO = 'YiChieh Chien';

export default (): ReactElement => {
  const { isMobile } = useContext(MobileContext);
  const { pathname } = useLocation();
  const theme = useTheme();
  const navigate = useNavigate();
  const trigger = useScrollTrigger();

  const getNavColor = (navName: string): string => {
    if (navName !== pathname) return theme.palette.secondary.main;
    switch (navName) {
      case '/':
      case '/skills':
      case '/works':
      case '/experiences':
      case '/certificates':
      case '/contact':
        return theme.palette.primary.main;
      default:
        return theme.palette.secondary.main;
    }
  };

  return (
    <>
      <Slide appear={false} direction="down" in={!trigger}>
        <AppBar sx={{ backgroundColor: 'rgba(255, 255, 255, 0.5)' }}>
          <Container maxWidth="lg">
            <Toolbar>
              <StyledNavbar>
                <StyledLogo onClick={() => navigate('/', { state: { isClickNav: true }})}>{LOGO}</StyledLogo>
                {isMobile ? (
                  <Drawer />
                ) : (
                  <StyledNavMenu>
                    <StyledNavItem
                      onClick={() => navigate('/skills', { state: { isClickNav: true }})}
                      style={{ color: getNavColor('/skills') }}
                    >
                      Skills
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => navigate('/works', { state: { isClickNav: true }})}
                      style={{ color: getNavColor('/works') }}
                    >
                      Works
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => navigate('/experiences', { state: { isClickNav: true }})}
                      style={{ color: getNavColor('/experiences') }}
                    >
                      Experiences
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => navigate('/certificates', { state: { isClickNav: true }})}
                      style={{ color: getNavColor('/certificates') }}
                    >
                      Certificates
                    </StyledNavItem>
                    <StyledNavItem
                      onClick={() => navigate('/contact', { state: { isClickNav: true }})}
                      style={{ color: getNavColor('/contact') }}
                    >
                      Contact
                    </StyledNavItem>
                  </StyledNavMenu>
                )}
              </StyledNavbar>
            </Toolbar>
          </Container>
        </AppBar>
      </Slide>
    </>
  );
};
