import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
import { Home } from '../components/home';
import { Header } from '../components/header';
import { About } from '../components/about';
import { Footer } from '../components/footer';
const Container = styled.div`
`;

const SlideContainer = styled.main`
    height: calc(100% - 102px);
    background: #FFFFFF;
    padding: 51px 100px;
    color: #2F2F2F;
`;

export function Main() {
  function beforeChange(e: any) {
    //{from: 0, to: 1}
    console.log(e);
  }

  return (
    <Container>
      <Header/>
      <FullPage controls={false} beforeChange={beforeChange}>
        <Slide>
          <SlideContainer><Home/></SlideContainer>
        </Slide>
        <Slide>
          <SlideContainer><About/></SlideContainer>
        </Slide>
      </FullPage>
      <Footer/>
    </Container>
  );
}
