/* eslint-disable no-debugger */
/* eslint-disable react/no-unused-state */
import './styles/App.css';
import React, { Component } from 'react';
import Template from './components/Template';
import FormHeader from './components/FormHeader';
import FormSkills from './components/FormSkills';
import FormEducation from './components/FormEducation';
import FormExperience from './components/FormExperience';
import FormProjects from './components/FormProjects';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first: 'First',
      last: 'Last',
      email: 'email@email.com',
      github: 'email@github.com',
      education: [
        {
          id: 0,
          name: 'University Example',
          city: 'city',
          state: 'state',
          degree: 'degree name',
          start: 'September 2000',
          end: 'Present',
          expectedEnd: null,
        },
      ],
      experience: [
        {
          id: 0,
          name: 'Googlo',
          position: 'chef',
          city: 'cityName',
          state: 'stateName',
          start: 'May',
          end: 'June',
          points: ['one', 'two'],
        },
      ],
      projects: [
        {
          id: 0,
          name: 'Project Name',
          position: 'Lab Assistant',
          date: 'September 2020',
          descriptions: ['one', 'two'],
        },
      ],
      skills: {
        numChildren: 0,
        title: 'title example',
        descript: 'description example',
      },
      skill: [
        {
          id: 0,
          title: 'example',
          descript: 'example',
        },
      ],
    };
  }

  handleChange(ev, key) {
    this.setState({
      [key]: ev.target.value,
    });
  }

  handleObjChange(ev, key) {
    this.setState(({ skills }) => ({
      skills: {
        ...skills,
        [key]: ev.target.value,
      },
    }));
  }

  handleNewObj(ev, key) {
    // debugger;
    this.setState(({ skill }) => ({
      skill: [
        ...skill,
        { [key]: ev.target.value },
      ],
    }));
  }

  onAddChild() {
    this.setState(({ skills }) => ({
      skills: {
        ...skills,
        numChildren: skills.numChildren + 1,
      },
    }));
  }

  render() {
    /* const children = [];

    // eslint-disable-next-line react/destructuring-assignment
    for (let i = 0; i < this.state.skills.numChildren; i += 1) {
      children.push(<FormSkills />);
    } */
    const {
      education, skills, experience, projects,
    } = this.state;
    return (
      <div className="App">
        <h1> Resume Template</h1>
        <div className="Form">
          <FormHeader
            changeFunc={(ev, key) => this.handleChange(ev, key)}
            currState={this.state}
          />
          <FormEducation
            currState={education}
          />
          <FormSkills
            changeFunc={(ev, key) => this.handleObjChange(ev, key)}
            addChild={() => this.onAddChild()}
            newObj={(ev, key) => this.handleNewObj(ev, key)}
            currState={skills}
          />
          <FormExperience
            currState={experience}
          />
          <FormProjects
            currState={projects}
          />
        </div>
        <Template
          currState={this.state}
        />
      </div>
    );
  }
}
