import { useState } from "react";
import { marked } from "marked";
import './App.css';

function App() {
  //Sets default markdown text in editor
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

  //Interprets carriage returns and renders them as line breaks
  marked.setOptions({
    breaks: true
  });

  return <div className="App">
    <div className="container">
      <div className="top">
        <textarea
          id="editor"
          //onChange handle detects changes
          onChange={(event) => {
            setText(event.target.value);
          }}
          //Put value to the text
          value={text}
        ></textarea>
      </div>

      <div className="bottom">
        <div
          id="preview"
          //parse markdown by creating object and setting it to the dangerouslySetInnerHTML attribute.
          dangerouslySetInnerHTML={{
            __html: marked(text),
          }}
        ></div>
      </div>
    </div>
  </div>
}

export default App;