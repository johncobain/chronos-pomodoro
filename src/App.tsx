import './styles/theme.css';
import './styles/global.css';
import { Heading } from './components/Heading';
import { TimerIcon } from 'lucide-react';

export const App = () => {
  return (
    <>
      <div>
        <Heading>
          Hey, Laddies
          <button>
            <TimerIcon />
          </button>
        </Heading>
        <p>Oh oh Oh oh </p>
        <h2>When you're hot, you're hot</h2>
        <h3>And when you're not, you're not</h3>
      </div>
      <hr />
      <div>
        <Heading>Hey, Fellas</Heading>
        <p>Oh oh Oh oh </p>
        <h2>When you're hot, you're hot</h2>
        <h3>And when you're not, you're not</h3>
      </div>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur
        enim itaque voluptas quas excepturi sit necessitatibus, dolore optio
        distinctio ipsum harum, voluptatibus officia alias nihil omnis nulla
        aperiam! Consequatur, omnis!
      </p>
    </>
  );
};
