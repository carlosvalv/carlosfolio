import { isMobile, isTablet, useMobileOrientation } from 'react-device-detect';
import styled from 'styled-components';

const Container = styled.section<{isLandscape: boolean}>`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${props=>props.isLandscape ? "4em" : "5em"};
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

const Desc = styled.p<{bold: boolean}>`
  line-height: 1.5;
  font-size: 2vh;
  margin-top: 0;
  font-weight: ${props=> props.bold ? 700 : 200};
`;

const Tags = styled.div`
  flex:2;
`;

const List = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 8px;
`;

const TagsTitle = styled.h2`
  font-size: 1.75vh;
  margin-top: 0;
`;

const Tag = styled.span`
  background: #2F2F2F;
  border-radius: 25px;
  padding: 5px 10px;
  color: #fff;
`;

export function About() {
  return (
    <Container isLandscape={useMobileOrientation().isLandscape && isMobile && !isTablet}>
      <Title>About</Title>
      <Body>
        <Descriptions>
          <Desc bold={false}>As a highly motivated full stack engineer, I have a passion for development and the thrill of overcoming big technical challenges.
            With a strong understanding of both front-end and back-end technologies. I am driven to create high-quality software that makes a difference.</Desc>
          <Desc bold={true}>I am always seeking new opportunities to further my skills and work on impactful projects that drive innovation and make a positive impact.</Desc>
        </Descriptions>
        <Tags>
          <TagsTitle>Skills & Technologies</TagsTitle>
          <List>
            <Tag>Html</Tag>
            <Tag>CSS</Tag>
            <Tag>Javascript</Tag>
            <Tag>Typescript</Tag>
            <Tag>React</Tag>
            <Tag>.Net</Tag>
            <Tag>MongoDB</Tag>
            <Tag>JSON Parsing</Tag>
            <Tag>Git</Tag>
            <Tag>Github</Tag>
            <Tag>Object-oriented programming</Tag>
          </List>
        </Tags>
      </Body>
    </Container>
  );
}
