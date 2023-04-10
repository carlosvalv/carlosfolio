import styled from 'styled-components';
import { FullPage, Slide } from 'react-full-page';
const Container = styled.div`
  
    font-size: 100px; 
`;
const SlideContainer = styled.div`
    font-size: 80px; 
    height: calc(100% - 32px);
    background: #ebe1c5;
    padding: 16px;
    color:#4e6b66;

`;

export function Main() {
  function beforeChange(e: any) {
    //{from: 0, to: 1}
    console.log(e);
  }

  return (
    <Container>
      <FullPage controls={false} beforeChange={beforeChange}>
        <Slide>
          <SlideContainer>Inner slide content</SlideContainer>
        </Slide>
        <Slide>
          <SlideContainer>Another slide content</SlideContainer>
        </Slide>
      </FullPage>
    </Container>
  );
}
