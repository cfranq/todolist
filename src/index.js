import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import './styles/main.scss';

class HelloReact extends React.Component {
  render() {
    return (
      <div>
      <div id='helloReact'>Hello from Cyn</div>
      <App />
      </div>
    )
  }
}


render(<HelloReact />, document.getElementById('root'));