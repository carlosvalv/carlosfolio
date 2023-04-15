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

const Link = styled.a`
  padding: 10px;
`;

export function Header() {
  return (
    <Container>
      <nav>
        <Sections>
          <List>
            <li><Link>Home</Link></li>
            <li><Link>Experience</Link></li>
            <li><Link>Work</Link></li>
            <li><Link>Contact</Link></li>
          </List>
        </Sections>
      </nav>
    </Container>
  );
}
