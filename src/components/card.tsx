import { useContext } from "react";
import styled from "styled-components";
import { isLandscapeMobileContext } from "../context/landscapeMobile";
const Container = styled.div<{ isLandscape: boolean }>`
  width: ${(props) =>
    props.isLandscape ? "fit-content" : "auto"};
  max-width: 500px;
  min-width: 200px;
  padding: 16px;
  border-radius: 16px;
  background-color: rgb(47, 47, 47, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: ${(props) => (props.isLandscape ? "0.75em" : "1.25em")};
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  opacity: 0.9;
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
  &:hover {
    opacity: 1;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
    transform: translateY(-15px);
  }
`;

const TitleCard = styled.h4`
  color: #fff;
  text-align: center;
  margin: 0;
  font-size: 30px;
  padding-bottom: 4px;
  font-weight: bold;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  max-width: 100%;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const Tag = styled.span`
  background-color: #fff;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 600;
  color: #2f2f2f;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #e0e0e0;
  }
`;

const Desc = styled.p<{ isLandscape: boolean }>`
  color: #fff;
  font-size: ${(props) => (props.isLandscape ? "1vmax" : "1em")};
  margin: 0;
  text-align: center;
`;

// const Footer = styled.div`
//   background-color: rgba(255, 255, 255, 0.9);
//   border-radius: 14px;
//   margin-top: auto;
//   padding: 8px 12px;
//   text-align: center;
//   transition: background-color 0.3s ease;
//   &:hover {
//     background-color: #f0f0f0;
//   }
// `;

// const Link = styled.a`
//   color: #2f2f2f;
//   text-decoration: none;
//   display: block;
//   padding: 6px;
// `;

type CardProps = {
  title: string;
  tags: string[];
  desc: string;
  url?: string;
  img?: string;
};

export function Card(props: CardProps) {
  const isLandscapeMobile = useContext(isLandscapeMobileContext);
  const { url, title, img } = props;

  const onClick = () => {
    window.open(url, "_blank");
  };

  return (
    <Container isLandscape={isLandscapeMobile} onClick={() => onClick()}>
      <TitleCard>{title}</TitleCard>
      {img && (
        <img
          src={`/imgs/projects/${img}`}
          alt={title}
          style={{
            maxWidth: "100%",
            maxHeight: isLandscapeMobile ? 125 : "",
            display: isLandscapeMobile ? "none" : "inherit  ",
          }}
        />
      )}
      <Tags>
        {props.tags.map((tag: string) => {
          return <Tag key={tag}>{tag}</Tag>;
        })}
      </Tags>
      <Desc isLandscape={isLandscapeMobile}>{props.desc}</Desc>
      {/* {isMobile && url && (
        <Footer>
          <Link target="_blank" rel={"noreferrer"} href={props.url}>
            View Project
          </Link>
        </Footer>
      )} */}
    </Container>
  );
}
