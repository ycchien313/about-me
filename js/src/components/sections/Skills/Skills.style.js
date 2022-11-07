import styled, { css } from 'styled-components';

export const UiSkills = styled.section`
  padding: 100px 20px;
  text-align: center;
`;

export const UiBoxesWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  row-gap: 40px;

  ${({ isMobile }) =>
    isMobile &&
      css`
        flex-direction: column;
        align-items: center;
      `
  }
`;

export const UiBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const UiBoxTitle = styled.div`
  font-size: 1.5rem;
  font-weight: bolder;
`;

export const UiBoxDetail = styled.div`
`;

export const UiBoxFigure = styled.figure`
  display: flex;
  align-items: center;
  gap: 10px;
  height: 30px;
`;

export const UiCardWrapper = styled.div`
`;