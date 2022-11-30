import { forwardRef } from 'react';
import { Stack } from '@mui/material';
import { StyledSectionTitle } from '../common.style';
import { EXPERIENCES, TITLE } from './Experiences.constant';
import {
  StyledRoot,
  StyledExperiences,
  StyledExperience,
  StyledYear,
  StyledDivider,
  StyledAchievement,
  StyledCircle,
} from './Experiences.style';

export default forwardRef<HTMLDivElement>((props, ref ) => {
  return (
    <StyledRoot ref={ref}>
      <StyledSectionTitle>{TITLE}</StyledSectionTitle>

      <StyledExperiences>
        {EXPERIENCES.map(({ id, year, title, subtitle }) =>
          <StyledExperience key={id}>
            <StyledYear>{year}</StyledYear>
            <StyledDivider orientation='horizontal' />
            <StyledAchievement>
              <Stack flexDirection={'row'} alignItems={'center'} gap='10px'>
                <StyledCircle />
                <span>{title}</span>
              </Stack>
              <Stack flexDirection={'row'} alignItems={'center'} gap='10px'>
                <StyledCircle sx={{ opacity: 0 }} />
                <span>{subtitle}</span>
              </Stack>
            </StyledAchievement>
          </StyledExperience>)}
      </StyledExperiences>
    </StyledRoot>
  );    
});