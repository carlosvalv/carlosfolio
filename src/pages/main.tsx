import styled from "styled-components";
import { Home } from "../components/home";
import { Header } from "../components/header";
import { About } from "../components/about";
import { Footer } from "../components/footer";
import { useCallback, useEffect, useRef, useState } from "react";
import { Work } from "../components/work";
import { Contact } from "../components/contact";
import { isMobile, isTablet, useMobileOrientation } from "react-device-detect";

const Container = styled.div`
  overflow-y: hidden;
`;

const Slides = styled.div`
  height: 100vh;
  overscroll-behavior-y: contain;
  scroll-snap-type: y mandatory;
  overflow-y: auto;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const SlideContainer = styled.div<{ isLandscape: boolean }>`
  height: 100vh;
  background: #ffffff;
  color: #2f2f2f;
  scroll-snap-align: center;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #888;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 1000px) {
    padding: 0 40px;
  }
  @media (max-width: 750px) {
    ${(props) => props.isLandscape && "padding: 0 25px;"}
    ${(props) => props.isLandscape && "height: calc(100%);"}
  }
`;

const dicPages = {
  0: "#home",
  1: "#about",
  2: "#work",
  3: "#contact",
};

export function Main() {
  const [selected, setSelected] = useState<number>(0);

  const [initSlide] = useState(
    window.location.hash
      ? +Object.keys(dicPages).find(
          (key) => dicPages[key] === window.location.hash
        )!
      : 0
  );
  const { isLandscape } = useMobileOrientation();
  const slides = useRef(null);

  function scrollTo(page: number) {
    let doc = document.getElementById(dicPages[page].split("#")[1]);
    //@ts-ignore
    slides.current.scrollTo(0, doc.offsetTop);
  }

  const checkKey = useCallback(
    (e: any) => {
      e = e || window.event;
      e.preventDefault();
      if (e.keyCode === 38 && selected > 0) {
        scrollTo(selected - 1);
      } else if (e.keyCode === 40 && selected < 3) {
        scrollTo(selected + 1);
      }
    },
    [selected]
  );

  useEffect(() => {
    document.addEventListener("keydown", checkKey);
    return () => {
      document.removeEventListener("keydown", checkKey);
    };
  }, [checkKey]);

  function onScroll(e: any) {
    let page = Math.trunc(e.target.scrollTop / e.target.offsetHeight);
    setSelected(page);
  }

  useEffect(() => {
    window.history.replaceState(null, "", dicPages[selected]);
  }, [selected]);

  useEffect(() => {
    setSelected(initSlide);
    let doc = document.getElementById(dicPages[initSlide].split("#")[1]);
    //@ts-ignore
    slides.current.scrollTo(0, doc.offsetTop);
  }, [initSlide]);

  return (
    <Container>
      <Header selected={selected} />
      <Slides onScroll={(e: any) => onScroll(e)} ref={slides}>
        <SlideContainer
          id={"home"}
          isLandscape={isLandscape && isMobile && !isTablet}
        >
          <Home />
        </SlideContainer>
        <SlideContainer
          id={"about"}
          isLandscape={isLandscape && isMobile && !isTablet}
        >
          <About />
        </SlideContainer>
        <SlideContainer
          id={"work"}
          isLandscape={isLandscape && isMobile && !isTablet}
        >
          <Work />
        </SlideContainer>
        <SlideContainer
          id={"contact"}
          isLandscape={isLandscape && isMobile && !isTablet}
        >
          <Contact />
        </SlideContainer>
        {selected !== 3 && <Footer />}
      </Slides>
    </Container>
  );
}
