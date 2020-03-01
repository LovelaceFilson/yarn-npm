import React from 'react';
import ReactDOM from 'react-dom';

import logo, { ReactComponent } from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       brand: "Codetrain Class",
      student: "Lacey",
      color: "red",
      year: 2019
    };
  }
  render(){
  return ( 
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           
        </p>
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Lacey
        </a>
      </header>
      <h1>My {this.state.brand}</h1>
        <p>
          It is  {this.state.student},

          {this.state.color},

           {this.state.year}
        </p>
    </div>
  );
}
}
ReactDOM.render(<App />, document.getElementById('root'));

export default App;



