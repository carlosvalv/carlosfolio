import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: var(--nav-height);
  transition: var(--transition);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  >nav{
    padding: 0 2em;
  }
`;

const Sections = styled.div`
  display: flex;
  align-items: center;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 1em;
  >li{
    cursor: pointer;
    width: 20px;
    height: 20px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    :hover{
      transform: translateY(-3px);
    }
  }
`;

const Link = styled.a`
  color: #2F2F2F;
`;

export function Footer() {
  return (
    <Container>
      <nav>
        <Sections>
          <List>
            <li><Link target='_blank' rel={"noreferrer"} href={"https://www.linkedin.com/in/carlosvalverdealba/"}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link></li>
            <li><Link target='_blank' rel={"noreferrer"} href={"https://github.com/carlosvalv"}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link></li>
            <li><Link href={"mailto:valverdealbacarlos@gmail.com"}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title/><g id="Complete"><g id="mail"><g><polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#2F2F2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/><rect fill="none" height="14" rx="2" ry="2" stroke="#2F2F2F" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" width="18" x="3" y="6.5"/></g></g></g></svg></Link></li>
          </List>
        </Sections>
      </nav>
    </Container>
  );
}
