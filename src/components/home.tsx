import { useMobileOrientation } from 'react-device-detect';
import styled from 'styled-components';

const Container = styled.section<{isLandscape: boolean}>`
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  @media (max-width: 750px) {
    ${props=> !props.isLandscape && "flex-direction: column"};
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  @media (max-width: 750px) {
    align-items: center;
  }
`;

const Title = styled.h2`
  font-size: 5.5vmax;
  margin: 0;
`;

const Desc = styled.p`
  max-width: 600px;
  font-size: 2vh;
`;

const Img = styled.img`
  width: 200px;
  border-radius: 50%;
  @media (max-width: 1000px) {
    width: 180px
  }
`;

export function Home() {
  return (
    <Container isLandscape={useMobileOrientation().isLandscape}>
      <Left>
        <span>Hi, my name is</span>
        <Title>Carlos Valverde</Title>
        <Desc>I'm a software developer specialized in both Front and Back with a strong understanding of both.</Desc>
      </Left>
      <Right><Img src='/imgs/me.jpg' /></Right>
    </Container>
  );
}
