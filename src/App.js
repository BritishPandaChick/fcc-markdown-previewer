import { useState } from "react"
import './App.css';

function App() {
  const [text, setText] = useState('');

  return <div className="App">
    <textarea
      id="editor"
      onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}
    ></textarea>
    <div id="preview">{text}</div>
  </div>
}
