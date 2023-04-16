import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
import { Home } from '../components/home';
import { Header, HeaderSection } from '../components/header';
import { About } from '../components/about';
import { Footer } from '../components/footer';
import { useState } from 'react';
const Container = styled.div`
`;

const SlideContainer = styled.main`
  height: calc(100% - 102px);
  background: #FFFFFF;
  padding: 51px 100px;
  color: #2F2F2F;

  @media (max-width: 1000px) {
    padding: 51px 40px;
  }
  @media (max-width: 750px) {
    padding: 51px 25px;
  }
`;

export function Main() {
  const [selected, setSelected] = useState<number>(0);
  function beforeChange(e: any) {
    //{from: 0, to: 1}
    setSelected(e.to);
    let urlName = "";
    switch (e.to) {
      case (0):
        urlName = "#home";
        break;
      case (1):
        urlName = "#about";
        break;
      case (2):
        urlName = "#work";
        break;
      case (3):
        urlName = "#contact";
        break;
    }
    
    window.history.replaceState(null, "", urlName)
  }

  return (
    <Container>
      <Header selected={selected} handleSection={(section: HeaderSection) => { setSelected(section) }} />
      <FullPage duration={100} controls={false} beforeChange={beforeChange} >
        <Slide>
          <SlideContainer id={"home"}><Home /></SlideContainer>
        </Slide>
        <Slide>
          <SlideContainer id={"about"}><About /></SlideContainer>
        </Slide>
      </FullPage>
      <Footer/>
    </Container>
  );
}
