import './styles/App.css';
import React, { Component } from 'react';
import Header from './components/Header';
import Subsection from './components/Subsection';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header 
          first="First" 
          last="Last" 
          github="git@github.com"
          email="e@mail.com"
        />
        <Subsection title="Education"/>
        <Subsection title="Skills"/>
        <Subsection title="Experience"/>
      </div>
    );
  }
}
