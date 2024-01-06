import { useEffect, useState } from "react";
import { isMobile, isTablet, useMobileOrientation } from "react-device-detect";
import styled from "styled-components";

const Container = styled.div<{ isLandscape: boolean }>`
  width: 200px;
  align-items: center;
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
  transform: scale(0.9);
  transition: transform .3s ease;
  cursor: pointer;
  :hover {
    transform: scale(1);
  }
`;

const TitleCard = styled.h4`
  color: #fff;
  text-align: center;
  margin: 0;
  font-weight: 500;
  border-bottom: .5px solid;
  padding-bottom: 12px;
  font-size: 16px;
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
  font-size: ${(props) => (props.isLandscape ? "1vmax" : "0.875em")};
`;

const Footer = styled.div`
  background-color: #fff;
  border-radius: 14px;
  text-align: center;
  margin-top: auto;
`;

const Link = styled.a`
  color: #2f2f2f;
  text-decoration: none;
  width: calc(100% - 12px);
  display: block;
  padding: 6px;
`;

type CardProps = {
  title: string;
  tags: string[];
  desc: string;
  url?: string;
};

export function Card(props: CardProps) {
  const { isLandscape } = useMobileOrientation();
  const [isLandscapeMobile, setIsLandscapeMobile] = useState<boolean>(
    isLandscape && isMobile && !isTablet
  );
  const { url, title } = props;

  const onClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>{
    window.open(url, '_blank');
  } 

  useEffect(() => {
    setIsLandscapeMobile(isLandscape && isMobile && !isTablet);
  }, [isLandscape]);

  return (
    <Container isLandscape={isLandscapeMobile} onClick={(e) => onClick(e)}>
      <TitleCard>{title}</TitleCard>
      <Tags>
        {props.tags.map((tag: string) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
      <Desc isLandscape={isLandscapeMobile}>{props.desc}</Desc>
      {!isLandscapeMobile && url && (
        <Footer>
          <Link target="_blank" rel={"noreferrer"} href={props.url}>
            View Project
          </Link>
        </Footer>
      )}
    </Container>
  );
}
