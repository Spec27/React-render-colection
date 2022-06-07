import PantingList from './components/Panting/PantingList';

import pantings from './pantings.json';

import ProductList from './components/ProductСard/ProductList';
import cards from './cards.json';

import Section from './components/Section/Section';
import './App.css';

function App() {
  return (
    <div>
      <Section title="Top Summer">
        <ProductList items={cards} />
        <PantingList items={pantings} />
      </Section>
    </div>
  );
}

export default App;
