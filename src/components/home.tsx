import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.h2`
    font-size: 5.5vmax;
    margin: 0;
`;
const Desc = styled.p`
    max-width: 600px;
`;
export function Home() {
  return (
    <Container>
      <span>Hi, my name is</span>
      <Title>Carlos Valverde</Title>
      <Desc>I'm a software engineer specialized in both Front and Back with a strong understanding of both.</Desc>
    </Container>
  );
}
