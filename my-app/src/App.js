import Container from 'components/Container';
import './App.css';
import Section from './components/Section';

import PantingList from './components/Panting/PantingList';
import pantings from './pantings.json';

import ProductList from './components/ProductСard/ProductList';
import cards from './cards.json';

import ColorPicker from './components/ColorPicker';
import colorPickerOption from './colorPickerOption.json';

import Alert from 'components/Alert';

import Box from './components/Box';
import Counter from 'components/Counter';

import Dropdown from './components/Dropdown';

import { useSelector, useDispatch } from 'react-redux';
import { increment, reset, getClicks } from './redux/clicksSlice';

function App() {
  const dispatch = useDispatch();
  const numberOfClics = useSelector(getClicks);

  return (
    <>
      <button onClick={() => dispatch(increment(5))}>{numberOfClics}</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
      <div>
        <Container>
          <Section>
            <Dropdown />
          </Section>
          <Section title="Top Summer Render Colections">
            <ProductList items={cards} />

            <PantingList items={pantings} />
          </Section>

          <Section title="Style-Componets Render Css">
            <ColorPicker options={colorPickerOption} />

            <Alert text="Go to Home" type="success" />
            <Alert text="Go to Home" type="warning" />
            <Alert text="Go to Home" type="error" />

            <Box type="small" ClassNames="teal" />
            <Box type="medium" />
            <Box type="big" />
          </Section>
          <Section title="Events and status">
            <Counter />
          </Section>
        </Container>
      </div>
    </>
  );
}

export default App;
