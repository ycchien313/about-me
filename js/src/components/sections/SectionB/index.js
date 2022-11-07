import React, { forwardRef } from 'react';
import { UiSection } from './SectionB.style';

export const SectionB = forwardRef((props, ref) => {
  return (
    <UiSection ref={ref}></UiSection>
  );
});
