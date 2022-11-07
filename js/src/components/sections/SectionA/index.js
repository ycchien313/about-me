import React, { forwardRef } from 'react';
import { UiSection } from './SectionA.style';

export const SectionA = forwardRef((props, ref) => {
  return (
    <UiSection id='sectionA' ref={ref}>

    </UiSection>
  );
});