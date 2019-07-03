import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';

let marked = require('marked');

const defaultMarkdown = `
# Header 1
- list item one
- list item two

[Free Code Camp](https://freecodecamp.org)

### Text Decorations

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
`;

//Link opens in new tab
const renderer = new marked.Renderer()
renderer.link = function(href, title, text) {
  return `<a href=${href} target="_blank">${text}</a>`
}

marked.setOptions({
  breaks: true, //interprets carriage returns as line breaks
  renderer: renderer
});

class App extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      markdown: defaultMarkdown
    }
  }

  handleChange = e => this.setState({ markdown: e.target.value })

  render() {
    return (
      <div>
        <div className='container'>
          <div className="top">
            <textarea id="editor" value={this.state.markdown} onChange={this.handleChange}></textarea>
          </div>

          <div className="bottom">
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
