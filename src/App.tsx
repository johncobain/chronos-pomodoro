import { Container } from './components/Container';
import { Heading } from './components/Heading';
import { Logo } from './components/Logo';

import './styles/theme.css';
import './styles/global.css';

export const App = () => {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>MENU</Heading>
      </Container>
    </>
  );
};
