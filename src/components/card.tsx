import styled from "styled-components";

const Article = styled.article<{ $featured: boolean }>`
  min-width: 0;
  overflow: hidden;
  display: grid;
  grid-template-columns: ${(props) => (props.$featured ? "minmax(280px, 0.9fr) 1.1fr" : "1fr")};
  border: 1px solid #dededb;
  border-radius: 18px;
  background: #fff;
  color: #242424;
  transition: transform 180ms ease, box-shadow 180ms ease, border-color 180ms ease;
  &:hover {
    transform: translateY(-4px);
    border-color: #b8b8b3;
    box-shadow: 0 12px 30px rgba(25, 25, 25, 0.08);
  }
  @media (max-width: 760px) {
    grid-template-columns: 1fr;
  }
`;

const ImageFrame = styled.div<{ $featured: boolean }>`
  min-height: 0;
  aspect-ratio: ${(props) => (props.$featured ? "4 / 3" : "16 / 10")};
  background: #f1f0ed;
  img {
    display: block;
    width: 100%;
    height: 100%;
    min-height: 0;
    aspect-ratio: ${(props) => (props.$featured ? "4 / 3" : "16 / 10")};
    object-fit: cover;
  }
  @media (max-width: 760px) {
    min-height: 0;
    img { min-height: 0; }
  }
`;

const Content = styled.div<{ $featured: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: ${(props) => (props.$featured ? "clamp(1.5rem, 4vw, 3rem)" : "1.4rem")};
  gap: 1rem;
`;

const Context = styled.p`
  color: #686861;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.09em;
  line-height: 1.4;
  margin: 0;
  text-transform: uppercase;
`;

const Title = styled.h3<{ $featured: boolean }>`
  font-size: ${(props) => (props.$featured ? "clamp(2rem, 4vw, 3rem)" : "1.5rem")};
  letter-spacing: -0.035em;
  line-height: 1.05;
  margin: 0;
`;

const Desc = styled.p`
  color: #555;
  line-height: 1.6;
  margin: 0;
`;

const Metrics = styled.ul`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  list-style: none;
  margin: 0;
  padding: 0;
  li { border-top: 1px solid #dededb; padding-top: 0.75rem; }
  strong {
    display: block;
    font-size: clamp(1.5rem, 3vw, 2.1rem);
    letter-spacing: -0.04em;
    line-height: 1.1;
  }
  span {
    display: block;
    color: #686861;
    font-size: 0.9rem;
    line-height: 1.4;
    margin-top: 0.35rem;
  }
  @media (max-width: 420px) {
    grid-template-columns: 1fr;
  }
`;

const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    border-radius: 999px;
    background: #f0f0ed;
    color: #484842;
    font-size: 0.8rem;
    padding: 0.35rem 0.65rem;
  }
`;

const ProjectLink = styled.a`
  color: #252520;
  font-weight: 700;
  margin-top: auto;
  padding-top: 0.25rem;
  text-decoration-thickness: 1px;
  text-underline-offset: 4px;
  &:hover { text-decoration-thickness: 2px; }
`;

type CardProps = {
  title: string;
  tags: string[];
  desc: string;
  url?: string;
  img?: string;
  context?: string;
  metrics?: { value: string; label: string }[];
  featured?: boolean;
  linkLabel?: string;
};

export function Card({
  title,
  tags,
  desc,
  url,
  img,
  context,
  metrics,
  featured = false,
  linkLabel,
}: CardProps) {
  return (
    <Article $featured={featured}>
      {img && (
        <ImageFrame $featured={featured}>
          <img src={`/imgs/projects/${img}`} alt={`${title} project preview`} loading="lazy" />
        </ImageFrame>
      )}
      <Content $featured={featured}>
        {context && <Context>{context}</Context>}
        <Title $featured={featured}>{title}</Title>
        <Desc>{desc}</Desc>
        {metrics && <Metrics aria-label={`${title} impact metrics`}>{metrics.map((metric) => <li key={metric.label}><strong>{metric.value}</strong><span>{metric.label}</span></li>)}</Metrics>}
        <Tags aria-label={`${title} technologies`}>{tags.map((tag) => <li key={tag}>{tag}</li>)}</Tags>
        {url && <ProjectLink href={url} target="_blank" rel="noreferrer">{linkLabel || "View project"} <span aria-hidden="true">↗</span></ProjectLink>}
      </Content>
    </Article>
  );
}
