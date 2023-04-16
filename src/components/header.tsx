import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  top: 0px;
  width: 100%;
  height: var(--nav-height);
  //background-color: rgba(10, 25, 47, 0.85);
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
  >li{
    cursor: pointer;
  }
`;

const Link = styled.a<{selected: boolean}>`
  padding: 10px;
  :-webkit-any-link{
    text-decoration : ${props=> props.selected ?"underline" : "none"};
    color: rgb(47, 47, 47)

  }
  ${props=> props.selected && "text-decoration: underline"};
`;

type HeaderProps = {
  selected: HeaderSection,
  handleSection: any,
}

export enum HeaderSection {
  Home,
  About,
  Work,
  Contact
}

export function Header(props: HeaderProps) {
  const clickSection = (section: HeaderSection) => {
    props.handleSection(section)
  }

  return (
    <Container>
      <nav>
        <Sections>
          <List>
            <li><Link href={"#home"} selected={props.selected === HeaderSection.Home} onClick={()=>clickSection(HeaderSection.Home)}>Home</Link></li>
            <li><Link href={"#about"} selected={props.selected === HeaderSection.About} onClick={()=>clickSection(HeaderSection.About)}>About</Link></li>
            <li><Link href={"#work"} selected={props.selected === HeaderSection.Work} onClick={()=>clickSection(HeaderSection.Work)}>Work</Link></li>
            <li><Link href={"#contact"} selected={props.selected === HeaderSection.Contact} onClick={()=>clickSection(HeaderSection.Contact)}>Contact</Link></li>
          </List>
        </Sections>
      </nav>
    </Container>
  );
}
