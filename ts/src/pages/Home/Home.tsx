import { ReactElement, useEffect, useRef } from 'react';
import { Banner, Skills, Works, Experiences, Certificates } from '@/sections';

export default (): ReactElement => {
  const { pathname } = location,
        html = document.documentElement,
        homeRef = useRef<HTMLDivElement>(null),
        skillsRef = useRef<HTMLDivElement>(null),
        worksRef = useRef<HTMLDivElement>(null),
        experiencesRef = useRef<HTMLDivElement>(null),
        certificatesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    switch (pathname) {
      case '/':
        return homeRef.current?.scrollIntoView({ behavior: 'smooth' });
      case '/skills':
        return skillsRef.current?.scrollIntoView({ behavior: 'smooth' });
      case '/works':
        return worksRef.current?.scrollIntoView({ behavior: 'smooth' });
      case '/experiences':
        return experiencesRef.current?.scrollIntoView({ behavior: 'smooth' });
      case '/certificates':
        return certificatesRef.current?.scrollIntoView({ behavior: 'smooth' });
      case '/contact':
        return window.scrollBy({ top: html.scrollHeight, behavior: 'smooth' });
      default:
        break;
    }
  }, [pathname]);

  return (
    <div ref={homeRef}>
      <Banner />
      <Skills ref={skillsRef} />
      <Works ref={worksRef} />
      <Experiences ref={experiencesRef} />
      <Certificates ref={certificatesRef} />
      {/* <Contact /> */}
    </div>
  );
};
