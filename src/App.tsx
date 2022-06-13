import React from 'react';
import logo from './logo.svg';
import './App.css';
import useTestHook from './useTestHook';

function App() {
  const { testState, catFact } = useTestHook('Hello, World!');
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The message is {`${testState}`}
        </p>
        <p><strong>Cat Fact:</strong> {`${catFact}`}</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
