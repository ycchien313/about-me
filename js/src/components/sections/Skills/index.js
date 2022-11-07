import React, { forwardRef } from 'react';
import {
  useTheme,
  useMediaQuery,
} from '@mui/material';
import {
  UiBox,
  UiBoxDetail,
  UiBoxFigure,
  UiBoxTitle,
  UiBoxesWrapper,
  UiSkills,
} from './Skills.style';
import { UiGlobalTitle } from 'styles/global.style.js';

const title = 'SKILLS';
const categories = ['Basic Tools', 'JS Framework', 'UI Framework'];
const skills = {
    'Basic Tools': [
      {
        src: 'src/assets/images/html.svg',
        name: 'HTMl'
      },
      {
        src: 'src/assets/images/css.svg',
        name: 'CSS'
      },
      {
        src: 'src/assets/images/javascript.svg',
        name: 'JavaScript'
      },
    ],
    'JS Framework': [
      {
        src: 'src/assets/images/react.svg',
        name: 'React'
      },
    ],
    'UI Framework': [
      {
        src: 'src/assets/images/bootstrap.svg',
        name: 'Bootstrap'
      },
      {
        src: 'src/assets/images/material-ui.svg',
        name: 'Material-UI'
      },
    ]
  };

export const Skills = forwardRef((props, ref) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  return(
    <UiSkills ref={ref}>
      {/* <UiSectionTitle>{title}</UiSectionTitle> */}
      <UiGlobalTitle>{title}</UiGlobalTitle>
      <UiBoxesWrapper isMobile={isMobile}>
        {
          categories.map((category, index) =>
            <UiBox key={index}>
              <UiBoxTitle>{category}</UiBoxTitle>
              <UiBoxDetail>
                {
                  skills[category].map((skill, index) => 
                    <UiBoxFigure key={index}>
                      <img src={skill.src} alt="react" style={{ height: '100%'}} />
                      <figcaption>{skill.name}</figcaption>
                    </UiBoxFigure>
                  )
                }
              </UiBoxDetail>
            </UiBox>
          )
        }
      </UiBoxesWrapper>
    </UiSkills>
  );
});