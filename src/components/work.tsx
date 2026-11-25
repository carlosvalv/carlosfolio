import styled from "styled-components";
import { Card } from "./card";
import { works } from "../constants/works";

const Container = styled.section`
  width: min(100%, 1120px);
  margin: 0 auto;
  padding: 1rem 0;
`;

const Eyebrow = styled.p`
  margin: 0 0 0.75rem;
  color: #666;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1;
  margin: 0 0 1rem;
`;

const Intro = styled.p`
  color: #555;
  font-size: 1.05rem;
  margin: 0 0 2rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  > article:first-child { grid-column: 1 / -1; }
  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    > article:first-child { grid-column: auto; }
  }
`;

export function Work() {
  return (
    <Container>
      <Eyebrow>Selected work</Eyebrow>
      <Title>A few things I’ve worked on</Title>
      <Intro>Professional product work alongside independent projects.</Intro>
      <Grid>
        {works.map((item) => (
          <Card
            key={item.title}
            title={item.title}
            desc={item.desc}
            tags={item.tags}
            img={item.img}
            url={item.url}
            context={item.context}
            metrics={item.metrics}
            featured={item.featured}
            linkLabel={item.linkLabel}
          />
        ))}
      </Grid>
    </Container>
  );
}
