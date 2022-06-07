import PantingList from './components/Panting/PantingList';
import './App.css';
import pantings from './pantings.json';
import Section from './components/Section/Section';

function App() {
  return (
    <div>
      <Section title="Top Summer">
        <PantingList items={pantings} />
      </Section>
    </div>
  );
}

export default App;
