import { useState } from 'react';
import { isMobile, isTablet, useMobileOrientation } from 'react-device-detect';
import styled from 'styled-components';

const Container = styled.div<{ isLandscape: boolean }>`
  width: 200px;
  height: calc(100% - 28px);
  min-width: 200px;
  ${props => !props.isLandscape && "min-height: 260px"};
  padding: 14px;
  border-radius: 16px;
  background-color: #2F2F2F;
  gap: ${props => props.isLandscape ? "0.75em" : "1em"};
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const TitleCard = styled.h4`
  color: #fff;
  text-align: center;
  margin: 0;
  font-weight: 500;
  border-bottom: 1px solid;
  padding-bottom: 12px;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  gap: 8px;
`;

const Tag = styled.span`
  background-color: #fff;
  padding: 5px 10px;
  border-radius: 25px;
  font-size: 14px;
  font-size: 1.5vh;
  font-weight: 600;
`;

const Desc = styled.p<{ isLandscape: boolean }>`
  color: #fff;
  font-size: ${props=> props.isLandscape ? "1vmax" : "0.875em"};
`;

const Footer = styled.div`
  background-color: #fff;
  border-radius: 14px;
  text-align: center;
  margin-top: auto;
`;

const Link = styled.a`
  color: #2F2F2F;
  text-decoration: none;
  width: calc(100% - 12px);
  display: block;
  padding: 6px;
`;

type CardProps = {
  title: string,
  tags: string[],
  desc: string,
  url?: string
}

export function Card(props: CardProps) {
  const [isLandscape] = useState<boolean>(useMobileOrientation().isLandscape && isMobile && !isTablet);
  return (
    <Container isLandscape={isLandscape}>
      <TitleCard>{props.title}</TitleCard>
      <Tags>
        {props.tags.map((tag: string) => {
          return <Tag key={tag}>{tag}</Tag>
        })}
      </Tags>
      <Desc isLandscape={isLandscape}>{props.desc}</Desc>
      {!isLandscape && props.url &&
        <Footer>
          <Link target='_blank' rel={"noreferrer"} href={props.url}>View Project</Link>
        </Footer>
      }
    </Container>
  );
}
