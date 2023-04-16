import styled from 'styled-components';

const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h2`
    font-size: 5.5vmax;
    margin: 0;
`;

export function Work() {
  return (
    <Container>
      <Title>Work</Title>
    </Container>
  );
}
