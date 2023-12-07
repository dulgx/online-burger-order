import logo from './logo.svg';
import './App.css';

import { MyCoolButton } from "./components/MyButton";
import { Comment } from "./components/Comment";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Comment zohiogch="DL" />
      </header>
    </div>
  );
}

export default App;
