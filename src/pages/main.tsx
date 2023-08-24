import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
import { Home } from '../components/home';
import { Header } from '../components/header';
import { About } from '../components/about';
import { Footer } from '../components/footer';
import {useCallback, useEffect, useState } from 'react';
import { Work } from '../components/work';
import { Contact } from '../components/contact';
import { isMobile, isTablet, useMobileOrientation } from 'react-device-detect';

const Container = styled.div`
  user-select: none;
  .controls{
    display: none;
  }
`;

const SlideContainer = styled.main<{isLandscape: boolean}>`
  height: calc(100% - 102px);
  background: #FFFFFF;
  padding: 51px 100px;
  color: #2F2F2F;

  @media (max-width: 1000px) {
    padding: 51px 40px;
  }
  @media (max-width: 750px) {
    padding: 51px 25px;
    ${props=> props.isLandscape && "padding: 30px 25px;"}
    ${props=> props.isLandscape && "height: calc(100% - 60px);"}
  }
`;

export function Main() {
  const [selected, setSelected] = useState<number>(1);
  const [dicPages] = useState({0: "#home", 1: "#about", 2: "#work", 3: "#contact"});
  const [initSlide] = useState(window.location.hash ?  +Object.keys(dicPages).find(key => dicPages[key] === window.location.hash)! : 0);
  const [duration, setDuration] = useState(250);

  function prevSlide(){
    var controls = document.getElementsByClassName("controls");
    //@ts-ignore
    controls[0]!.firstChild!.click();
  }

  function nextSlide(){
    var controls = document.getElementsByClassName("controls");
    //@ts-ignore
    controls[0]!.lastChild!.click();
  }

  const checkKey = useCallback((e: any) => {
    e = e || window.event;
    e.preventDefault();
    if (e.keyCode === 38)
      prevSlide();
    else if (e.keyCode === 40)
      nextSlide();
  }, []);

  useEffect(()=>{
    document.addEventListener('keydown', checkKey);
    return () => {
      document.removeEventListener('keydown', checkKey);
    };
  },[checkKey]);

  function beforeChange(e: any) {
    //{from: 0, to: 1}
    setSelected(e.to);
    window.history.replaceState(null, "", dicPages[e.to])
    setDuration(400);
  }

  return (
    <Container>
      <Header selected={selected}/>
      <FullPage duration={duration} controls beforeChange={beforeChange} controlsProps={{className: 'controls'}} initialSlide={initSlide}>
        <Slide>
          <SlideContainer id={"home"} isLandscape={useMobileOrientation().isLandscape && isMobile && !isTablet}><Home/></SlideContainer>
        </Slide>
        <Slide>
          <SlideContainer id={"about"} isLandscape={useMobileOrientation().isLandscape && isMobile && !isTablet}><About/></SlideContainer>
        </Slide>
        <Slide>
          <SlideContainer id={"work"} isLandscape={useMobileOrientation().isLandscape && isMobile && !isTablet}><Work/></SlideContainer>
        </Slide>
        <Slide>
          <SlideContainer id={"contact"} isLandscape={useMobileOrientation().isLandscape && isMobile && !isTablet}><Contact/></SlideContainer>
        </Slide>
      </FullPage>
      {selected !== 3 && <Footer/>}
    </Container>
  );
}
