import { forwardRef, useEffect, useState } from 'react';
import { ExpandMore, GitHub, ImportContacts } from '@mui/icons-material';
import { CardActions, CardContent, Collapse, IconButton, Typography } from '@mui/material';
import { StyledSectionTitle } from '../common.style';
import { CARDS, TITLE } from './Works.constant';
import { StyledCard, StyledCardMedia, StyledCardWrapper, StyledIconButtonExpandMore, StyledRoot } from './Works.style';

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
