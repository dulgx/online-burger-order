import logo from './logo.svg';
import './App.css';

import { MyCoolButton }  from "./components/MyButton";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MyCoolButton tovchNer="My new1" text="Click Me!" />
        <MyCoolButton tovchNer="My new2" text="HI!" />
        <MyCoolButton text="Hello!" />
        <MyCoolButton />
        <MyCoolButton />
      </header>
    </div>
  );
}

export default App;
