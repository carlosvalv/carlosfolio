import { useContext } from "react";
import styled from "styled-components";
import { isLandscapeMobileContext } from "../context/landscapeMobile";

const Container = styled.section<{ isLandscape: boolean }>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${(props) => (props.isLandscape ? "4em" : "5em")};
  justify-content: center;

  @media (max-width: 750px) {
    gap: 3em;
  }
`;

const Title = styled.h2`
  font-size: 5.5vmax;
  margin: 0;
`;

const Body = styled.div`
  display: flex;
  gap: 2em;
  margin: 0 9%;

  @media (max-width: 1000px) {
    flex-direction: column;
  }
  @media (max-width: 750px) {
    margin: 0;
  }
`;

const Descriptions = styled.div`
  flex: 3;
  margin-top: 0;
`;

const Desc = styled.p<{ bold: boolean }>`
  line-height: 1.5;
  font-size: 2vh;
  margin-top: 0;
  font-weight: ${(props) => (props.bold ? 700 : 200)};
`;

const Tags = styled.div`
  flex: 2;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagsTitle = styled.h2`
  font-size: 2vh;
  margin-top: 0;
`;

const Tag = styled.span`
  background: #2f2f2f;
  border-radius: 25px;
  padding: 5px 10px;
  font-size: 2vh;
  color: #fff;

  @media (max-width: 750px) {
    max-width: 150px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export function About() {
  const isLandscapeMobile = useContext(isLandscapeMobileContext);

  return (
    <Container isLandscape={isLandscapeMobile}>
      <Title>About</Title>
      <Body>
        <Descriptions>
          <Desc bold={false}>
            Highly motivated frontend engineer with a passion for development
            and a track record of overcoming significant technical challenges.
            Possessing a strong understanding of both front-end and back-end
            technologies, I am driven to create high-quality software solutions
            that have a meaningful impact.
          </Desc>
          <Desc bold={true}>
            Constantly seeking new opportunities to expand my skills, I actively
            pursue projects that drive innovation and make a positive
            difference.
          </Desc>
        </Descriptions>
        <Tags>
          <TagsTitle>Skills & Technologies</TagsTitle>
          <List>
            <Tag>React</Tag>
            <Tag>Javascript</Tag>
            <Tag>Typescript</Tag>
            <Tag>Tailwind</Tag>
            <Tag>Storybook</Tag>
            <Tag>Node.js</Tag>
            <Tag>MongoDB</Tag>
            <Tag>PostgreSQL</Tag>
            <Tag>Html</Tag>
            <Tag>Scss</Tag>
            <Tag>Git</Tag>
            <Tag>Github</Tag>
          </List>
        </Tags>
      </Body>
    </Container>
  );
}
