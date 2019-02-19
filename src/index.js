import React from 'react';
import ReactDOM from 'react-dom';
import generateData from './js/generate';

import App from './components/App';

import './css/style.css';

ReactDOM.render(<App />, document.getElementById('root'));

document.getElementById("generate-button").addEventListener("click", () => {
  generateData(document.getElementById("options-length").value);
});
