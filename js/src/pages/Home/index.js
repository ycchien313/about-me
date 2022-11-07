import React, { useEffect, useRef } from 'react';

import { useLocation } from 'react-router-dom';
import { UiPage, UiSectionsWrapper, } from './Home.style';
import { Header } from 'components/Header';
import { Banner } from 'components/Banner';
import { Skills } from 'components/sections/Skills';
import { Works } from 'components/sections/Works';
import { Experiences } from 'components/sections/Experiences';
import { Certificates } from 'components/sections/Certificates';
import { Footer } from 'components/Footer';
// import { SectionA } from 'components/sections/SectionA';
// import { SectionB } from 'components/sections/SectionB';

export const Home = () => {
  const location = useLocation();
  const homeRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const experiencesRef = useRef(null);
  const certificatesRef = useRef(null);
  const footerRef = useRef(null);

  /* 網址帶參數方式 */
  // const { sectionId } = useParams();
  // const sectionARef = useRef(null);
  // const sectionBRef = useRef(null);
  // useEffect(() => {
  //   switch (sectionId) {
  //     case 'sectionA':
  //       return setTimeout(sectionARef.current.scrollIntoView({ behavior: 'smooth' }), 100);
  //     case 'sectionB':
  //       return setTimeout(sectionBRef.current.scrollIntoView({ behavior: 'smooth' }), 100);
      
  //     default:
  //       break;
  //   }
  // }, []);

  useEffect(() => {
    console.log('location', location);
    const { pathname } = location;
    switch (pathname) {
      case '/':
        return homeRef.current.scrollIntoView({ behavior: 'smooth' });
      case '/skills':
        return skillsRef.current.scrollIntoView({ behavior: 'smooth' });
      case '/works':
        return worksRef.current.scrollIntoView({ behavior: 'smooth' });
      case '/experiences':
        return experiencesRef.current.scrollIntoView({ behavior: 'smooth' });
      case '/certificates':
        return certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
      case '/contact':
        return footerRef.current.scrollIntoView({ behavior: 'smooth' });
      default:
        break;
    }
  }, [location]);

  return(
    <UiPage ref={homeRef}>
      <Header />
      <UiSectionsWrapper>
        <Banner />
        <Skills ref={skillsRef}/>
        <Works ref={worksRef}/>
        <Experiences ref={experiencesRef}/>
        <Certificates ref={certificatesRef} />
        {/* <SectionA ref={sectionARef} />
        <SectionB ref={sectionBRef}/> */}
      </UiSectionsWrapper>
      <Footer ref={footerRef} />
    </UiPage>
  );
};
