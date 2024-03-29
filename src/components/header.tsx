import styled from "styled-components";

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0px;
  width: calc(100% - 10px);
  height: var(--nav-height);
  backdrop-filter: blur(10px);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
`;

const Sections = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  > li {
    cursor: pointer;
  }
`;

const Link = styled.a<{ selected: boolean }>`
  padding: 10px;
  :-webkit-any-link {
    text-decoration: ${(props) => (props.selected ? "underline" : "none")};
    color: rgb(47, 47, 47);
  }
  ${(props) => props.selected && "text-decoration: underline"};
`;

type HeaderProps = {
  selected: HeaderSection;
};

export enum HeaderSection {
  Home,
  About,
  Work,
  Contact,
}

export function Header(props: HeaderProps) {
  return (
    <Container>
      <nav>
        <Sections>
          <List>
            <li>
              <Link
                id={"header-" + HeaderSection.Home}
                href={"#home"}
                selected={props.selected === HeaderSection.Home}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.About}
                href={"#about"}
                selected={props.selected === HeaderSection.About}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.Work}
                href={"#work"}
                selected={props.selected === HeaderSection.Work}
              >
                Work
              </Link>
            </li>
            <li>
              <Link
                id={"header-" + HeaderSection.Contact}
                href={"#contact"}
                selected={props.selected === HeaderSection.Contact}
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
