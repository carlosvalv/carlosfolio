import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const Title = styled.div`
    font-size: 5.5vmax; 
`;
const Desc = styled.p`
    max-width: 600px;
`;
export function Home() {
  return (
    <Container>
      <Title>Full Stack Developer</Title>
      <Desc>Front end software developement in Barcelona, with a particular passion for design, creativity and communication.</Desc>
    </Container>
  );
}
