import { ReactElement, useEffect, useRef } from 'react';
import { Banner, Skills } from '@/sections';

export default (): ReactElement => {
  const { pathname } = location;
  const homeRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (pathname) {
      case '/':
        return homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      case '/skills':
        return skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
      // case '/works':
      //   return worksRef.current.scrollIntoView({ behavior: 'smooth' });
      // case '/experiences':
      //   return experiencesRef.current.scrollIntoView({ behavior: 'smooth' });
      // case '/certificates':
      //   return certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
      // case '/contact':
      //   return footerRef.current.scrollIntoView({ behavior: 'smooth' });
      default:
        break;
    }
  }, [pathname]);

  return (
    <div ref={homeRef}>
      {/* TODO: 建立 session component */}
      <Banner />
      <Skills ref={skillsRef} />
      {/* <Works /> */}
      {/* <Experiences /> */}
      {/* <Certificates /> */}
      {/* <Contact /> */}
    </div>
  );
};
