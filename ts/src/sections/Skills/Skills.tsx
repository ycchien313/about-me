import { forwardRef } from 'react';
import { StyledSectionTitle } from '../common.style';
import { CATEGORIES, SKILLS, TITLE } from './Skills.constant';
import {
  StyledRoot,
  StyledBoxesWrapper,
  StyledBox,
  StyledBoxTitle,
  StyledBoxFigure,
  StyledBoxIcon,
  StyledIcon,
} from './Skills.style';

type TProps = {
  children?: JSX.Element;
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
                  <StyledBoxIcon>
                    <StyledIcon src={skill.src} alt="react" />
                  </StyledBoxIcon>
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
