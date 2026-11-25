import styled from "styled-components";
import { Home } from "../components/home";
import { Header, HeaderSection } from "../components/header";
import { About } from "../components/about";
import { Experience } from "../components/experience";
import { Footer } from "../components/footer";
import { useContext, useEffect, useRef, useState } from "react";
import { Work } from "../components/work";
import { Contact } from "../components/contact";
import { isLandscapeMobileContext } from "../context/landscapeMobile";

const Slides = styled.main`
  height: 100vh;
  height: 100svh;
  overflow-y: auto;
  scroll-behavior: smooth;
  scroll-snap-type: y proximity;
  overscroll-behavior-y: contain;
`;

const SlideContainer = styled.div<{ isLandscape: boolean }>`
  min-height: 100vh;
  min-height: 100svh;
  box-sizing: border-box;
  background: #fff;
  color: #2f2f2f;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 5rem 40px 4rem;

  @media (max-width: 1000px) {
    padding-right: 25px;
    padding-left: 25px;
  }

  @media (max-width: 750px) {
    padding: 4.5rem 20px 4rem;
    ${(props) => props.isLandscape && "padding-right: 25px; padding-left: 25px;"}
  }
`;

const sections = ["home", "about", "experience", "work", "contact"] as const;

export function Main() {
  const isLandscapeMobile = useContext(isLandscapeMobileContext);
  const initialSection = Math.max(0, sections.indexOf(window.location.hash.slice(1) as typeof sections[number]));
  const [selected, setSelected] = useState(initialSection);
  const slides = useRef<HTMLElement>(null);

  function scrollTo(page: number) {
    const element = document.getElementById(sections[page]);
    if (!element || !slides.current) return;
    slides.current.scrollTo({ top: element.offsetTop, behavior: "smooth" });
  }

  function onScroll(event: React.UIEvent<HTMLElement>) {
    const scrollTop = event.currentTarget.scrollTop;
    const page = sections.reduce((nearest, id, index) => {
      const section = document.getElementById(id);
      const nearestSection = document.getElementById(sections[nearest]);
      if (!section || !nearestSection) return nearest;
      return Math.abs(section.offsetTop - scrollTop) < Math.abs(nearestSection.offsetTop - scrollTop)
        ? index
        : nearest;
    }, 0);
    setSelected(page);
  }

  useEffect(() => {
    window.history.replaceState(null, "", `#${sections[selected]}`);
  }, [selected]);

  useEffect(() => {
    if (initialSection > 0) scrollTo(initialSection);
  }, [initialSection]);

  return (
    <>
      <Header selected={selected as HeaderSection} />
      <Slides onScroll={onScroll} ref={slides}>
        <SlideContainer id="home" isLandscape={isLandscapeMobile}><Home /></SlideContainer>
        <SlideContainer id="about" isLandscape={isLandscapeMobile}><About /></SlideContainer>
        <SlideContainer id="experience" isLandscape={isLandscapeMobile}><Experience /></SlideContainer>
        <SlideContainer id="work" isLandscape={isLandscapeMobile}><Work /></SlideContainer>
        <SlideContainer id="contact" isLandscape={isLandscapeMobile}><Contact /></SlideContainer>
      </Slides>
      {selected !== 4 && <Footer />}
    </>
  );
}
