import { ReactElement, useRef } from 'react';
import { Banner } from '@/sections';

export default (): ReactElement => {
  const homeRef = useRef(null);
  // const skillsRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={homeRef}>
      {/* TODO: 建立 session component */}
      <Banner />
      {/* <Skills ref={skillsRef} /> */}
      {/* <Works /> */}
      {/* <Experiences /> */}
      {/* <Certificates /> */}
      {/* <Contact /> */}
    </div>
  );
};