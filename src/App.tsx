import './App.css';
import CounterComp from './components/CounterComp';

function App() {
  return (
    <div className="App">
      <CounterComp startNum={20}/>
    </div>
  );
}

export default App;
