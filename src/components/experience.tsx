import styled from "styled-components";

const Container = styled.section`
  width: min(100%, 1040px);
  margin: 0 auto;
  padding: 6rem 0 4rem;
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
  margin: 0 0 2.5rem;
`;

const Timeline = styled.div`
  display: grid;
  gap: 2rem;
`;

const Role = styled.article`
  display: grid;
  grid-template-columns: minmax(160px, 0.7fr) 2fr;
  gap: 2rem;
  padding: 1.75rem 0;
  border-top: 1px solid #d8d8d8;
  @media (max-width: 650px) {
    grid-template-columns: 1fr;
    gap: 0.75rem;
  }
`;

const Meta = styled.div`
  h3 { margin: 0 0 0.4rem; font-size: 1.25rem; }
  p { margin: 0; color: #666; }
`;

const Details = styled.div`
  h4 { margin: 0 0 0.35rem; font-size: 1.15rem; }
  p { margin: 0 0 0.75rem; color: #666; }
  ul { margin: 0; padding-left: 1.2rem; line-height: 1.7; }
  li + li { margin-top: 0.4rem; }
`;

export function Experience() {
  return (
    <Container>
      <Eyebrow>Experience</Eyebrow>
      <Title>Where I’ve made an impact</Title>
      <Timeline>
        <Role>
          <Meta><h3>ManoMano</h3><p>Barcelona · Mar 2024 – Present</p></Meta>
          <Details>
            <h4>Senior Frontend Developer</h4>
            <ul>
              <li>Build and improve frontend experiences with React, my primary focus at ManoMano.</li>
              <li>Develop end-to-end tests with Playwright to strengthen confidence in key user journeys.</li>
              <li>Use Amplitude and Datadog to investigate user journeys across markets, identify critical points in the mobile experience, and understand low-engagement areas such as dashboards.</li>
              <li>Work with backend, UX/UI and product teams to connect technical findings with user needs.</li>
            </ul>
          </Details>
        </Role>
        <Role>
          <Meta><h3>Tusmedia</h3><p>Granollers, Barcelona · Sep 2017 – Nov 2023</p></Meta>
          <Details>
            <h4>Full Stack Developer</h4>
            <ul>
              <li>Planned, developed and maintained web applications, including GoClass, a virtual classroom used by GoStudent and Classgap.</li>
              <li>Helped operate a classroom platform supporting over 20,000 classes per month; a revamp was associated with a 40% increase in student participation.</li>
              <li>Built interactive features with Fabric.js and worked with MongoDB and PostgreSQL, including stored procedures.</li>
              <li>Collaborated through pair programming and cross-functional code reviews to improve code quality and team delivery.</li>
            </ul>
          </Details>
        </Role>
      </Timeline>
    </Container>
  );
}
