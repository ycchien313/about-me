import { forwardRef } from 'react';
import { StyledSectionTitle } from '../common.style';
import {
  StyledRoot,
  StyledBoxesWrapper,
  StyledBox,
  StyledBoxTitle,
  StyledBoxFigure,
} from './Skills.style';

type TProps = {
  children?: JSX.Element;
};

const TITLE = 'SKILLS';
const CATEGORIES = ['Basic Tools', 'JS Framework', 'UI Framework'];
const SKILLS = {
  'Basic Tools': [
    {
      src: 'src/assets/images/html.svg',
      name: 'HTMl',
    },
    {
      src: 'src/assets/images/css.svg',
      name: 'CSS',
    },
    {
      src: 'src/assets/images/javascript.svg',
      name: 'JavaScript',
    },
  ],
  'JS Framework': [
    {
      src: 'src/assets/images/react.svg',
      name: 'React',
    },
  ],
  'UI Framework': [
    {
      src: 'src/assets/images/bootstrap.svg',
      name: 'Bootstrap',
    },
    {
      src: 'src/assets/images/material-ui.svg',
      name: 'Material-UI',
    },
  ],
};

export default forwardRef<HTMLDivElement, TProps>((props, ref): JSX.Element => {
  return (
    <StyledRoot ref={ref}>
      <StyledSectionTitle>{TITLE}</StyledSectionTitle>
      <StyledBoxesWrapper>
        {CATEGORIES.map((category, index) => (
          <StyledBox key={index}>
            <StyledBoxTitle>{category}</StyledBoxTitle>
            <div>
              {SKILLS[category as keyof typeof SKILLS].map((skill, index) => (
                <StyledBoxFigure key={index}>
                  <img src={skill.src} alt="react" style={{ height: '100%' }} />
                  <figcaption>{skill.name}</figcaption>
                </StyledBoxFigure>
              ))}
            </div>
          </StyledBox>
        ))}
      </StyledBoxesWrapper>
    </StyledRoot>
  );
});
