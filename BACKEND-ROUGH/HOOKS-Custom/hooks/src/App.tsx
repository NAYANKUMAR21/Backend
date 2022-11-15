
import './App.css';
import Counter from './components/Counter';
import Posts from './components/Posts';
import StopWatch from './components/StopWatch';
import SW2 from './components/SW2';
import SW3 from './components/SW3';

function App() {
  return (
    <div className="App">
      <Counter/>
      <StopWatch/>
      <SW2/>
      <SW3/>
      <Posts/>
    </div>
  );
}

export default App;
