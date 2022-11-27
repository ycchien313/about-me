
import { MobileContext } from 'contexts/Mobile';
import { ReactElement, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Code, Email, Folder, Menu, MilitaryTech, Luggage } from '@mui/icons-material';
import {
  Drawer,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { StyledContainer } from './Drawer.style';

export default (): ReactElement => {
  const { isMobile } = useContext(MobileContext);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleDrawer = (): void => {
    setIsOpen((prev: boolean): boolean => !prev);
  };

  const clickSkills = (): void => {
    navigate('/skills');
    toggleDrawer();
  };

  const clickWorks = (): void => {
    navigate('/works');
    toggleDrawer();
  };

  const clickExperiences = (): void => {
    navigate('/experiences');
    toggleDrawer();
  };

  const clickCertificates = (): void => {
    navigate('/certificates');
    toggleDrawer();
  };

  const clickContact = (): void => {
    navigate('/contact');
    toggleDrawer();
  };

  const navList = [
    {
      title: 'Skills',
      icon: <Code />,
      onClick: clickSkills,
    },
    {
      title: 'Works',
      icon: <Folder />,
      onClick: clickWorks,
    },
    {
      title: 'Experiences',
      icon: <Luggage />,
      onClick: clickExperiences,
    },
    {
      title: 'Certificates',
      icon: <MilitaryTech />,
      onClick: clickCertificates,
    },
    {
      title: 'Contact',
      icon: <Email />,
      onClick: clickContact,
    },
  ];

  return (
    <>
      <Drawer
        anchor='right'
        onClose={toggleDrawer}
        open={isOpen}
      >
        {navList.map(({ title, icon, onClick }) =>
          <ListItem key={title} onClick={onClick}>
              <ListItemButton>
                <ListItemIcon>
                  {icon}
                </ListItemIcon>
                <ListItemText>{title}</ListItemText>
              </ListItemButton>
            </ListItem>)}
      </Drawer>

      <StyledContainer onClick={toggleDrawer}>
        <Menu
          fontSize={isMobile ? 'medium' : 'large'}
        />
      </StyledContainer>
    </>
  );
};