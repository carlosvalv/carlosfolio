import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  z-index: 10;
  top: 0px;
  width: 100%;
  box-sizing: border-box;
  height: var(--nav-height, 60px);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  background: rgba(255, 255, 255, 0.86);
  nav {
    display: flex;
    justify-content: flex-end;
    max-width: 100%;
    min-width: 0;
    width: 100%;
    overflow: clip;
  }
`;

const Sections = styled.div`
  display: flex;
  align-items: center;
  min-width: 0;
`;

const List = styled.ul`
  display: flex;
  gap: 0.2rem;
  justify-content: flex-end;
  list-style: none;
  padding: 0;
  margin: 0;
  > li {
    cursor: pointer;
  }
`;

const Link = styled.a<{ selected: boolean }>`
  padding: 10px 7px;
  font-size: 0.9rem;
  color: #2f2f2f;
  font-weight: ${(props) => (props.selected ? 700 : 500)};
  text-decoration: ${(props) => (props.selected ? "underline" : "none")};
  text-underline-offset: 5px;
  white-space: nowrap;
  @media (max-width: 480px) {
    padding: 9px 4px;
    font-size: 0.78rem;
  }
`;

type HeaderProps = {
  selected: HeaderSection;
};

export enum HeaderSection {
  Home,
  About,
  Experience,
  Work,
  Contact,
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <nav aria-label="Main navigation">
        <Sections>
          <List>
            <li>
              <Link
                id={"header-" + HeaderSection.Home}
                href={"#home"}
                selected={props.selected === HeaderSection.Home}
                aria-current={props.selected === HeaderSection.Home ? "page" : undefined}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.About}
                href={"#about"}
                selected={props.selected === HeaderSection.About}
                aria-current={props.selected === HeaderSection.About ? "page" : undefined}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.Experience}
                href={"#experience"}
                selected={props.selected === HeaderSection.Experience}
                aria-current={props.selected === HeaderSection.Experience ? "page" : undefined}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.Work}
                href={"#work"}
                selected={props.selected === HeaderSection.Work}
                aria-current={props.selected === HeaderSection.Work ? "page" : undefined}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.Contact}
                href={"#contact"}
                selected={props.selected === HeaderSection.Contact}
                aria-current={props.selected === HeaderSection.Contact ? "page" : undefined}
              >
                Contact
              </Link>
            </li>
          </List>
        </Sections>
      </nav>
    </Container>
  );
}
