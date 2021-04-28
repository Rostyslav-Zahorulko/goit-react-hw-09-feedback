import Container from './components/Container';
import Section from './components/Section';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';

const App = () => (
  <Container>
    <Section title="Please leave feedback">
      <FeedbackOptions />
      <Statistics />
    </Section>
  </Container>
);

export default App;
