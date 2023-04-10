import styled from 'styled-components';
import { SectionsContainer, Section } from 'react-fullpage';

const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export function Main() {
  const options = {
    sectionClassName: 'section',
    anchors: ['sectionOne', 'sectionTwo'],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    arrowNavigation: true
  };

  return (
    <Container>
      <SectionsContainer {...options}>
        <Section>home</Section>
        <Section >second page</Section>
      </SectionsContainer>
    </Container>
  );
}
