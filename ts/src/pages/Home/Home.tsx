import { ReactElement, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDebounceFn } from 'ahooks';
import { Banner, Skills, Works, Experiences, Certificates } from '@/sections';

export default (): ReactElement => {
  const location = useLocation();
  const navigate = useNavigate();
  const { pathname } = location,
    html = document.documentElement,
    homeRef = useRef<HTMLDivElement>(null),
    skillsRef = useRef<HTMLDivElement>(null),
    worksRef = useRef<HTMLDivElement>(null),
    experiencesRef = useRef<HTMLDivElement>(null),
    certificatesRef = useRef<HTMLDivElement>(null);

  const { run: handleScroll } = useDebounceFn((): void => {
    const pageYOffset = window.pageYOffset,
      pageHeight = document.documentElement.scrollHeight,
      windowHeight = document.documentElement.clientHeight,
      homeOffsetTop = homeRef.current?.offsetTop,
      skillsOffsetTop = skillsRef.current?.offsetTop,
      worksOffsetTop = worksRef.current?.offsetTop,
      experiencesOffsetTop = experiencesRef.current?.offsetTop,
      certificatesOffsetTop = certificatesRef.current?.offsetTop,
      contactOffsetTop = pageHeight - windowHeight;

    if (
      homeOffsetTop === undefined ||
      skillsOffsetTop === undefined ||
      worksOffsetTop === undefined ||
      experiencesOffsetTop === undefined ||
      certificatesOffsetTop === undefined
    )
      return;

    if (pageYOffset === contactOffsetTop) navigate('/contact');
    else if (pageYOffset >= certificatesOffsetTop) navigate('/certificates');
    else if (pageYOffset >= experiencesOffsetTop) navigate('/experiences');
    else if (pageYOffset >= worksOffsetTop) navigate('/works');
    else if (pageYOffset >= skillsOffsetTop) navigate('/skills');
    else if (pageYOffset >= homeOffsetTop) navigate('/');
  }, { wait: 15 });

  useEffect(() => {
    if (!location.state?.isClickNav) return;

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

    location.state = { ...location.state, isClickNav: false };
  }, [pathname]);

  useEffect(() => {
    addEventListener('scroll', handleScroll);
    return () => removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={homeRef}>
      <Banner />
      <Skills ref={skillsRef} />
      <Works ref={worksRef} />
      <Experiences ref={experiencesRef} />
      <Certificates ref={certificatesRef} />
    </div>
  );
};
