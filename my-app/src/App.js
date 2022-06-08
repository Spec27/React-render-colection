import Container from 'components/Container/Container';

import PantingList from './components/Panting/PantingList';
import pantings from './pantings.json';

import ProductList from './components/ProductСard/ProductList';
import cards from './cards.json';

import Section from './components/Section/Section';
import './App.css';

import ColorPicker from './components/ColorPicker/ColorPicker';
import colorPickerOption from './colorPickerOption.json';

import Alert from 'components/Alert/Alert';

import Box from './components/Box/Box';

function App() {
  return (
    <div>
      <Container>
        <Section title="Top Summer Render Colections">
          <ProductList items={cards} />

          <PantingList items={pantings} />
        </Section>

        <Section title="Style-Componets Render Css">
          <ColorPicker options={colorPickerOption} />

          <Alert text="Go to Home" type="" />
          <Alert text="Go to Home" type="success" />
          <Alert text="Go to Home" type="warning" />
          <Alert text="Go to Home" type="error" />

          <Box type="small" ClassNames="teal" />
          <Box type="medium" />
          <Box type="big" />
        </Section>
      </Container>
    </div>
  );
}

export default App;
