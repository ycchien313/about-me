import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CodeIcon from '@mui/icons-material/Code';
import EmailIcon from '@mui/icons-material/Email';
import FolderIcon from '@mui/icons-material/Folder';
import MenuIcon from '@mui/icons-material/Menu';
import LuggageIcon from '@mui/icons-material/Luggage';
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech';
import { UiContainer } from './Drawer.style';
import {
  Drawer as MuiDrawer,
  ListItem as MuiListItem,
  ListItemButton as MuiListItemButton,
  ListItemIcon as MuiListItemIcon,
  ListItemText as MuiListItemText,
  useMediaQuery,
  useTheme,
} from '@mui/material';

export const Drawer = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => {
    setIsOpen((prevState) => setIsOpen(!prevState));
  };

  const clickSkills = () => {
    navigate('/skills');
    toggleDrawer();
  };

  const clickWorks = () => {
    navigate('/works');
    toggleDrawer();
  };

  const clickExperiences = () => {
    navigate('/experiences');
    toggleDrawer();
  };

  const clickCertificates = () => {
    navigate('/certificates');
    toggleDrawer();
  };

  const clickContact = () => {
    navigate('/contact');
    toggleDrawer();
  };

  const navList = [
    {
      title: 'Skills',
      icon: <CodeIcon />,
      onClick: clickSkills,
    },
    {
      title: 'Works',
      icon: <FolderIcon />,
      onClick: clickWorks,
    },
    {
      title: 'Experiences',
      icon: <LuggageIcon />,
      onClick: clickExperiences,
    },
    {
      title: 'Certificates',
      icon: <MilitaryTechIcon />,
      onClick: clickCertificates,
    },
    {
      title: 'Contact',
      icon: <EmailIcon />,
      onClick: clickContact,
    },
  ];

  return (
    <>
      <MuiDrawer
        anchor='right'
        onClose={toggleDrawer}
        open={isOpen}
      >
        {navList.map(({ title, icon, onClick }) =>
          <MuiListItem key={title} onClick={onClick}>
              <MuiListItemButton>
                <MuiListItemIcon>
                  {icon}
                </MuiListItemIcon>
                <MuiListItemText>{title}</MuiListItemText>
              </MuiListItemButton>
            </MuiListItem>)}
      </MuiDrawer>

      <UiContainer onClick={toggleDrawer}>
        <MenuIcon
          fontSize={isMobile ? 'medium' : 'large'}
        />
      </UiContainer>
    </>
  );
};