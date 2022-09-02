/* eslint-disable react/no-unused-state */
import './styles/App.css';
import React, { Component } from 'react';
import Template from './components/Template';
import FormHeader from './components/FormHeader';
import FormSkills from './components/FormSkills';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
      last: '',
      email: '',
      github: '',
      skills: {
        example: 'peepoo',
      },
    };
  }

  handleChange(ev, key) {
    this.setState({
      [key]: ev.target.value,
    });
  }

  handleObjChange() {
    this.setState((prevState) => ({
      skills: {
        ...prevState.skills,
      },
    }));
  }

  render() {
    return (
      <div className="App">
        <div className="Form">
          <FormHeader
            changeFunc={() => this.handleChange()}
            currState={this.state}
          />
          <FormSkills
            changeFunc={() => this.handleObjChange()}
            currState={this.state}
          />
        </div>
        <Template
          currState={this.state}
        />
      </div>
    );
  }
}
