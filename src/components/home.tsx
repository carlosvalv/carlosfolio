import styled from "styled-components";

const Container = styled.section`
  width: min(100%, 1100px);
  min-height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  gap: 3rem;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    align-content: center;
    gap: 2rem;
    padding: 6rem 0 4rem;
  }
`;

const Copy = styled.div`
  max-width: 750px;
`;

const Eyebrow = styled.p`
  color: #666;
  font-size: 0.95rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  margin: 0 0 1rem;
`;

const Title = styled.h1`
  font-size: clamp(3rem, 7vw, 6.25rem);
  line-height: 0.98;
  letter-spacing: -0.05em;
  margin: 0;
`;

const Desc = styled.p`
  max-width: 620px;
  font-size: clamp(1.1rem, 2vw, 1.4rem);
  line-height: 1.55;
  color: #555;
  margin: 1.5rem 0 2rem;
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
`;

const Action = styled.a<{ $primary?: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #2f2f2f;
  border-radius: 999px;
  padding: 0.8rem 1.2rem;
  color: ${(props) => (props.$primary ? "#fff" : "#2f2f2f")};
  background: ${(props) => (props.$primary ? "#2f2f2f" : "transparent")};
  text-decoration: none;
  font-weight: 600;
  transition: transform 180ms ease, background-color 180ms ease;
  &:hover { transform: translateY(-2px); }
`;

const Img = styled.img`
  width: clamp(160px, 22vw, 250px);
  aspect-ratio: 1;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 750px) {
    grid-row: 1;
    width: 140px;
  }
`;

export function Home() {
  return (
    <Container>
      <Copy>
        <Eyebrow>Senior Frontend Developer</Eyebrow>
        <Title>Hi, I’m Carlos Valverde.</Title>
        <Desc>
          I build thoughtful React experiences, combining frontend engineering
          with product insight, quality and close collaboration.
        </Desc>
        <Actions>
          <Action $primary href="#work">Explore my work</Action>
          <Action href="#contact">Get in touch</Action>
        </Actions>
      </Copy>
      <Img src="/imgs/me.jpg" alt="Carlos Valverde" />
    </Container>
  );
}
