import './App.css';
import SectionOne from './components/SectionOne/SectionOne';
import SectionTwo from './components/SectionTwo/SectionTwo';
import SectionThree from './components/SectionThree/SectionThree';
import SectionFour from './components/SectionFour/SectionFour';
import Margin from './components/Margin/Margin';

function App() {
  return (
    <div className="App">
      <SectionOne />
      <Margin />
      <SectionTwo />
      <Margin />
      <SectionThree />
      <Margin />
      <SectionFour />
    </div>
  );
}

export default App;
