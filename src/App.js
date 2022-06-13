import { useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {
  const [text, setText] = useState(`
  # Header 1 
  - list item one 
  - list item two 

  [Free Code Camp](https://freecodecamp.org)

  **bold**

  ## Header 2 
  ![Cute Baby Panda](https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/babypandabor.jpg)

  > To be, or not be. That is a stupid question.

  \`npm install create-react-app -g\`

  \`\`\`
  function helloWorld() {
    console.log("Hello World");
  }
  \`\`\`
  `);

  marked.setOptions({
    breaks: true
  });

  return <div className="App">
    <textarea
      id="editor"
      onChange={(event) => {
        setText(event.target.value);
      }}
      value={text}
    ></textarea>
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(text),
      }}
    ></div>
  </div>
}

export default App;