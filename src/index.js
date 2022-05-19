import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import WordleProvider from './context/WordleProvider';

ReactDOM.render(
  <React.StrictMode>
    <WordleProvider>
      <App />
    </WordleProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
