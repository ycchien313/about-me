import { forwardRef, SyntheticEvent, useState } from 'react';
import { ExpandMore } from '@mui/icons-material';
import { StyledSectionTitle } from '../common.style';
import { CERTS, TITLE } from './Certificates.constant';
import {
  StyledRoot,
  StyledListWrapper,
  StyledAccordion,
  StyledAccordionSummary,
  StyledListItemTitle,
  StyledAccordionDetails,
  StyledImg,
} from './Certificates.style';

export default forwardRef<HTMLDivElement>(( props, ref ) => {
  const [expandedPanel, setExpandedPanel] = useState<string | null>(null);
  
  const expandAccordion = (panel: string) => (e: SyntheticEvent, newExpanded: boolean) => {
    setExpandedPanel(newExpanded ? panel : null);
  };

  return (
    <StyledRoot ref={ref}>
      <StyledSectionTitle>{TITLE}</StyledSectionTitle>
      <StyledListWrapper>
        {CERTS.map(({ id, name, src }) => 
          <StyledAccordion
            key={id}
            expanded={expandedPanel === id}
            onChange={expandAccordion(id)}
          >
            <StyledAccordionSummary
              expanded={expandedPanel === id}
              expandIcon={<ExpandMore />}
            >
              <StyledListItemTitle>{name}</StyledListItemTitle>
            </StyledAccordionSummary>
            <StyledAccordionDetails>
              <StyledImg alt={name} src={src} />
            </StyledAccordionDetails>
          </StyledAccordion>)}
      </StyledListWrapper>
    </StyledRoot>
  );
});