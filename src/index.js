import { bro } from './bro';
import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

console.log((bro('Dude')))

render(<App />, document.getElementById('root'));