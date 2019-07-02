import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let marked = require('marked');

const firstMarkdown = `
### Headers
# Header 1
## Header 2

### Lists
- list item one
- list item two

### Links
[Free Code Camp](https://freecodecamp.org)

### Text Decorations

**bold**

### Images
![Cute Baby Panda](https://3c1703fe8d.site.internapcdn.net/newman/csz/news/800/2018/babypandabor.jpg)

### Blockquotes
> To be, or not be. That is a stupid question.

### Inline Code
\`npm install create-react-app -g\`


### Code Block
\`\`\`
function helloWorld() {
  console.log("Hello World");
}
\`\`\`
`;

var renderer = new marked.Renderer()
renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
  breaks: true,
  renderer: renderer
});

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      markdown: firstMarkdown
    }
  }

  handleChange = e => this.setState({ markdown: e.target.value })

  render() {
    return (
      <div>
        <div className='container'>
          <div className="left">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}></textarea>
          </div>
          <div className="right">
            <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.markdown)}}></div>
          </div>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

export default App;
