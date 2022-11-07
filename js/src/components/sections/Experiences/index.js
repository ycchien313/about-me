import React, { forwardRef } from 'react';
import { UiGlobalTitle } from 'styles/global.style';
import { Stack, useMediaQuery, useTheme} from '@mui/material';
import {
  UiRoot,
  UiExperiences,
  UiExperience,
  UiYear,
  UiDivider,
  UiAchievement,
  UiMuiCircle,
  UiAchievementTitle,
  UiAchievementSubTitle,
} from './Experiences.style';

const TITLE = 'EXPERIENCES';
const EXPERIENCES = [
  {
    id: 1,
    year: '2014',
    title: 'Microsoft Student Partner',
    subtitle: 'Technology Group',
  },
  {
    id: 2,
    year: '2016',
    title: '工業技術研究院 (ITRI)',
    subtitle: 'Android Engineer',
  },
  {
    id: 3,
    year: '2018',
    title: '日本富山大学',
    subtitle: '交換留学',
  },
  {
    id: 4,
    year: '2022',
    title: '萬通教育股份有限公司',
    subtitle: 'FrontEnd Engineer',
  },
];

export const Experiences = forwardRef((props, ref ) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')).toString();

  return (
    <UiRoot ref={ref}>
      <UiGlobalTitle>{TITLE}</UiGlobalTitle>

      <UiExperiences>
        {EXPERIENCES.map(({ id, year, title, subtitle }) =>
          <UiExperience key={id}>
            <UiYear>{year}</UiYear>
            <UiDivider orientation='horizontal' mobile={isMobile}/>
            <UiAchievement mobile={isMobile}>
              <Stack flexDirection={'row'} alignItems={'center'} gap='10px'>
                <UiMuiCircle />
                <UiAchievementTitle>{title}</UiAchievementTitle>
              </Stack>
              <Stack flexDirection={'row'} alignItems={'center'} gap='10px'>
                <UiMuiCircle sx={{ opacity: 0 }} />
                <UiAchievementSubTitle>{subtitle}</UiAchievementSubTitle>
              </Stack>
            </UiAchievement>
          </UiExperience>)}
      </UiExperiences>
    </UiRoot>
  );    
});