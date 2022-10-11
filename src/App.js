/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-debugger */
/* eslint-disable react/no-unused-state */
import './styles/App.css';
import React, { Component } from 'react';
import Template from './components/Template';
import Form from './components/Form';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 'First',
      last: 'Last',
      email: 'email@email.com',
      github: 'email@github.com',
      education: {
        id: 0,
        name: 'University Example',
        city: 'city',
        state: 'state',
        degree: 'degree name',
        start: 'September 2000',
        end: 'Present',
        expectedEnd: null,
      },
      experience: {
        id: 0,
        name: 'Googlo',
        position: 'chef',
        city: 'cityName',
        state: 'stateName',
        start: 'May',
        end: 'June',
        points: ['one', 'two'],
      },
      projects: [
        {
          id: 0,
          name: 'Project Name',
          position: 'Lab Assistant',
          date: 'September 2020',
          descriptions: ['one', 'two'],
        },
      ],
      // skills: {
      //   numChildren: 0,
      //   title: 'title example',
      //   descript: 'description example',
      // },
      skills: [
        {
          id: 0,
          title: 'title 0',
          descript: 'description 0',
        },
        {
          id: 1,
          title: 'title 1',
          descript: 'description 1',
        },
      ],
    };
  }

  handleChange(ev, key) {
    this.setState({
      [key]: ev.target.value,
    });
  }

  // handleSkillChange(ev, key) {
  //   this.setState(({ skills }) => ({
  //     skills: {
  //       ...skills,
  //       [key]: ev.target.value,
  //     },
  //   }));
  // }

  handleSkillChange(ev, key, id) {
    const skills = [...this.state.skills];
    const item = { ...skills[id] };
    item[key] = ev.target.value;
    skills[id] = item;
    this.setState({ skills });
  }

  handleEducationChange(ev, key) {
    this.setState(({ education }) => ({
      education: {
        ...education,
        [key]: ev.target.value,
      },
    }));
  }

  newSkill(ind) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      skills: [...this.state.skills, { id: ind, title: '', descript: '' }],
    });
  }

  render() {
    return (
      <div className="App">
        <h1> Resume Template</h1>
        <Form
          changeFunc={(ev, key) => this.handleChange(ev, key)}
          changeSkillFunc={(ev, key, ind) => this.handleSkillChange(ev, key, ind)}
          changeEduFunc={(ev, key) => this.handleEducationChange(ev, key)}
          newSkill={(ind) => this.newSkill(ind)}
          currState={this.state}
        />
        <Template
          currState={this.state}
        />
      </div>
    );
  }
}
