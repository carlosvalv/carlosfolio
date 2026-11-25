import styled from "styled-components";

const Container = styled.section`
  width: min(100%, 1040px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
  padding: 6rem 0 4rem;
`;

const Eyebrow = styled.p`
  margin: 0;
  color: #666;
  font-size: 0.9rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4.5rem);
  line-height: 1;
  margin: 0;
`;

const Body = styled.div`
  display: grid;
  grid-template-columns: 1.2fr 1fr;
  gap: 3rem;
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Copy = styled.div`
  p {
    font-size: 1.05rem;
    line-height: 1.75;
    margin: 0 0 1rem;
  }
`;

const SkillGroups = styled.div`
  display: grid;
  gap: 1.25rem;
`;

const SkillGroup = styled.div`
  h3 {
    font-size: 1rem;
    margin: 0 0 0.65rem;
  }
`;

const List = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const Tag = styled.span`
  background: #2f2f2f;
  border-radius: 999px;
  padding: 0.4rem 0.75rem;
  font-size: 0.9rem;
  color: #fff;
`;

export function About() {
  return (
    <Container>
      <Eyebrow>About</Eyebrow>
      <Title>Frontend craft.<br />Product thinking.</Title>
      <Body>
        <Copy>
          <p>
            I’m Carlos, a frontend developer with several years of experience
            building and improving web products. I enjoy turning product needs
            into reliable, thoughtful user experiences, and bring a practical
            approach to quality and collaboration.
          </p>
          <p>
            I value close collaboration with design, product and backend teams.
            I speak Spanish and Catalan natively, English at C1 level, and
            German at B1.2 level.
          </p>
        </Copy>
        <SkillGroups>
          <SkillGroup>
            <h3>Frontend</h3>
            <List>{["React", "TypeScript", "JavaScript", "Sass", "CSS", "HTML", "Storybook", "Styled Components", "Webpack"].map((skill) => <Tag key={skill}>{skill}</Tag>)}</List>
          </SkillGroup>
          <SkillGroup>
            <h3>Backend &amp; tools</h3>
            <List>{["Node.js", ".NET", "PostgreSQL", "MongoDB", "Docker", "Git", "GitHub", "Swagger"].map((skill) => <Tag key={skill}>{skill}</Tag>)}</List>
          </SkillGroup>
          <SkillGroup>
            <h3>Ways of working</h3>
            <List>{["Agile / Scrum", "Pair programming", "A/B testing", "Cross-functional collaboration"].map((skill) => <Tag key={skill}>{skill}</Tag>)}</List>
          </SkillGroup>
        </SkillGroups>
      </Body>
    </Container>
  );
}
