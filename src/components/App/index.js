import logo from './logo.svg';
import "./style.css";

import { MyCoolButton } from "../MyButton";
import { Comment } from "../Comment";

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