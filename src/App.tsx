import './styles/theme.css';
import './styles/global.css';
import { Container } from './components/Container';
import { Heading } from './components/Heading';

export const App = () => {
  return (
    <>
      <Container>
        <Heading>Chronos</Heading>
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
      <Container>
        <Heading>FORM</Heading>
      </Container>
      <Container>
        <Heading>FOOTER</Heading>
      </Container>
    </>
  );
};
