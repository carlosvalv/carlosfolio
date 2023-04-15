import styled from 'styled-components';

const Container = styled.section`
  margin-top: 7%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5em;
`;

const Title = styled.div`
  font-size: 5.5vmax; 
`;

const Body = styled.div`
  display: flex;
  gap: 2em;
`;

const Desc = styled.p`
  flex: 3;
  line-height: 1.5;
  font-size: 2.5vh;
  margin-top: 0;
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
    <Container>
      <Title>about</Title>
      <Body>
        <Desc>Development and design can feed and learn one from each other in any project. Hybrid professionals that understand and can communicate with both ends have the key to a better work flow in every environment.I believe more can be achieved when both ends meet, and I have a passion for being right where they do so.</Desc>
        <Tags>
          <TagsTitle>Tecnologias</TagsTitle>
          <List>
            <Tag>Html</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Javascript</Tag>
            <Tag>Html</Tag>
            <Tag>Html</Tag>
          </List>
        </Tags>
      </Body>
    </Container>
  );
}
