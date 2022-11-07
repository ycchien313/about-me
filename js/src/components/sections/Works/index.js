import React, { forwardRef, useState } from 'react';
import { UiGlobalTitle } from 'styles/global.style';
import { ExpandMore, GitHub, ImportContacts } from '@mui/icons-material';
import { Collapse, IconButton } from '@mui/material';
import {
  UiCardWrapper,
  UiMuiCard,
  // UiMuiCardActionArea,
  UiMuiCardActions,
  UiMuiCardContent,
  UiMuiCardMedia,
  UiMuiIconButtonExpandMore,
  UiMuiTypography,
  UiWorks,
} from './Works.style';

const title = 'WORKS';
const card = [
  {
    alt: 'MFEE16 homepage',
    description: 'Personal practice work. Implement the homepage of designed by the team. Use react framework',
    github: 'https://github.com/ycchien313/mfee16/tree/develop/forestage/frontend',
    image: '/src/assets/images/mfee16-home.png',
    pdf: 'https://drive.google.com/file/d/1_oD3hyeJVBRSF80vHGd0J0AI9jIpBfa_/view?usp=sharing',
    title: 'MFEE16 Homepage',

  },
  {
    alt: 'MFEE16 member center',
    description: 'Implement front end and back end of member center. Includes google login, facebook login, live chat, personal data, reservation data etc.',
    github: 'https://github.com/ycchien313/mfee16/tree/develop/forestage/backend',
    image: '/src/assets/images/mfee16-member-center.png',
    pdf: 'https://drive.google.com/file/d/1k5iN8DuKI04PF3FFI3M_u6Tj96egj2u3/view?usp=sharing',
    title: 'MFEE16 Member Center',
  },
];

export const Works = forwardRef((props, ref) => {
  const [isExpanded, setIsExpanded] = useState(new Array(card.length).fill(0));

  const clickExpandMore = (index) => {
    const result = isExpanded[index] ? 0 : 1;
    setIsExpanded(prev => {
      prev[index] = result;
      setIsExpanded([...prev]);
    });
  };

  return (
    <UiWorks ref={ref}>
      <UiGlobalTitle>{title}</UiGlobalTitle>
      <UiCardWrapper>
        {
          card.map(({ alt, description, github, image, pdf, title}, index) => 
            <UiMuiCard key={index}>
              <UiMuiCardMedia
                component='img'
                image={image}
                alt={alt}
              />
              <UiMuiCardActions>
                <IconButton aria-label='github' onClick={()=>window.open(github, '_blank')}>
                  <GitHub />
                </IconButton>
                <IconButton aria-label='pdf' onClick={()=>window.open(pdf, '_blank')}>
                  <ImportContacts />
                </IconButton>
                <UiMuiIconButtonExpandMore
                  expanded={isExpanded[index]}
                  onClick={()=>clickExpandMore(index)}
                >
                  <ExpandMore />
                </UiMuiIconButtonExpandMore>
              </UiMuiCardActions>
              <Collapse in={isExpanded[index] ? true : false}>
                <UiMuiCardContent>
                  <UiMuiTypography gutterBottom variant='h5'>{title}</UiMuiTypography>
                  <UiMuiTypography component='div' variant='body2'>{description}</UiMuiTypography>
                </UiMuiCardContent>
              </Collapse>
            </UiMuiCard>
          )
        }
      </UiCardWrapper>
    </UiWorks>
  );
});