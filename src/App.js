import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Link} from 'react-router';
import Person from './Person';

const data = [
  {id:1, name: 'bob', age: 12},
  {id:2, name: 'alice', age: 54},
  {id:3, name: 'jim', age: 22},
  {id:4, name: 'greg', age: 66}
]

class App extends Component {
  render() {
    const id = this.props.params.id;
    const person = data.filter(d => d.id == id);
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        
        <div className="dataView">
          <div className="dataView-nav">
            <h2>People</h2>
            <ul>
            {
              data.map((p,i) => <li key={i}><Link to={`/person/${p.id}`}>{p.name}</Link></li>)
            }
            </ul>
          </div>
          <div className="dataView-data">
            <h2>Details</h2>
            <Person {...person[0]} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
