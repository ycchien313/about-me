import { forwardRef, useEffect, useState } from 'react';
import { ExpandMore, GitHub, ImportContacts } from '@mui/icons-material';
import { CardActions, CardContent, Collapse, IconButton, Typography } from '@mui/material';
import { StyledSectionTitle } from '../common.style';
import { StyledCard, StyledCardMedia, StyledCardWrapper, StyledIconButtonExpandMore, StyledRoot } from './Works.style';

const TITLE = 'Works';
const CARDS = [
  {
    alt: 'MFEE16 homepage',
    description:
      'Personal practice work. Implement the homepage of designed by the team. Use react framework',
    github:
      'https://github.com/ycchien313/mfee16/tree/develop/forestage/frontend',
    image: '/src/assets/images/mfee16-home.png',
    pdf: 'https://drive.google.com/file/d/1_oD3hyeJVBRSF80vHGd0J0AI9jIpBfa_/view?usp=sharing',
    title: 'MFEE16 Homepage',
  },
  {
    alt: 'MFEE16 member center',
    description:
      'Implement front end and back end of member center. Includes google login, facebook login, live chat, personal data, reservation data etc.',
    github:
      'https://github.com/ycchien313/mfee16/tree/develop/forestage/backend',
    image: '/src/assets/images/mfee16-member-center.png',
    pdf: 'https://drive.google.com/file/d/1k5iN8DuKI04PF3FFI3M_u6Tj96egj2u3/view?usp=sharing',
    title: 'MFEE16 Member Center',
  },
];

export default forwardRef<HTMLDivElement>((props, ref): JSX.Element => {
  const [isExpanded, setIsExpanded] = useState<number[]>([]);
  const clickExpandMore = (index: number): void => {
    const result = isExpanded[index] ? 0 : 1;
    setIsExpanded((prev: number[]) => {
      prev[index] = result;
      return [...prev];
    });
  };

  useEffect(() => {
    setIsExpanded(new Array(CARDS.length).fill(0));
  }, []);

  return (
    <StyledRoot ref={ref}>
      <StyledSectionTitle>{TITLE}</StyledSectionTitle>
      <StyledCardWrapper>
        {CARDS.map(({ alt, description, github, image, pdf, title }, index) => (
          <StyledCard key={index}>
            <StyledCardMedia
              component='img'
              image={image}
              alt={alt}
              sx={{ maxHeight: '300px', objectPosition: 'top' }}
            />
            <CardActions>
              <IconButton aria-label='github' onClick={()=>window.open(github, '_blank')}>
                <GitHub />
              </IconButton>
              <IconButton aria-label='pdf' onClick={()=>window.open(pdf, '_blank')}>
                <ImportContacts />
              </IconButton>
              <StyledIconButtonExpandMore
                expanded={isExpanded[index]}
                onClick={() => clickExpandMore(index)}
              >
                <ExpandMore />
              </StyledIconButtonExpandMore>
            </CardActions>
            <Collapse in={isExpanded[index] ? true : false}>
              <CardContent>
                <Typography gutterBottom variant='h5'>{title}</Typography>
                <Typography component='div' variant='body2'>{description}</Typography>
              </CardContent>
            </Collapse>
          </StyledCard>
        ))}
      </StyledCardWrapper>
    </StyledRoot>
  );
});
