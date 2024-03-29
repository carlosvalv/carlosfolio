import { useContext } from 'react';
import styled from 'styled-components';
import { isLandscapeMobileContext } from '../context/landscapeMobile';

const Container = styled.section<{isLandscape: boolean}>`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: ${props=>props.isLandscape ? "4em" : "5em"};

  @media (max-width: 750px) {
    gap: 2.5em;
  }
`;

const Title = styled.h2`
  font-size: 5.5vmax;
  margin: 0;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const Desc = styled.p`
  max-width: 550px;
  line-height: 1.5;
  font-size: 2vh;
  margin:0;
`;

const Link = styled.a`
  color: #fff;
`;

const List = styled.ul<{isLandscape: boolean}>`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
  gap: 2em;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  >li{
    background: #2F2F2F;
    cursor: pointer;
    width:${props=> props.isLandscape ? "65px" : "80px"};
    height:${props=> props.isLandscape ? "65px" : "80px"};
    padding: 24px;
    transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
    border-radius: 50%;
    :hover{
      transform: translateY(-20px);
    }
    @media (max-width: 600px) {
      width: 65px;
      height: 65px;
      padding: 20px;
      :hover{
        transform: translateY(-12px);
      }
    }
  }
`;

export function Contact() {
  const isLandscapeMobile = useContext(isLandscapeMobileContext);

  return (
    <Container isLandscape={isLandscapeMobile}>
      <Title>Contact</Title>
      <Body>
        <Desc>If you're interested in working with me or just want to say hi, please don't hesitate to reach out.</Desc>
        <List isLandscape={isLandscapeMobile}>
          <li><Link target='_blank' rel={"noreferrer"} href={"https://www.linkedin.com/in/carlosvalverdealba/"}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>LinkedIn</title><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></Link></li>
          <li><Link target='_blank' rel={"noreferrer"} href={"https://github.com/carlosvalv"}><svg xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>GitHub</title><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></Link></li>
          <li><Link href={"mailto:valverdealbacarlos@gmail.com"}><svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><g id="Complete"><g id="mail"><g><polyline fill="none" points="4 8.2 12 14.1 20 8.2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" /><rect fill="none" height="14" rx="2" ry="2" stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" width="18" x="3" y="6.5" /></g></g></g></svg></Link></li>
        </List>
      </Body>
    </Container>
  );
}
