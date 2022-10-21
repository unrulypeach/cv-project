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
      showSkills: true,
      showEducation: true,
      showExperience: true,
      first: 'First',
      last: 'Last',
      email: 'email@email.com',
      github: 'email@github.com',
      education: [
        {
          id: 0,
          name: 'University of Example',
          city: 'City',
          state: 'State',
          degree: 'Bachelor of Arts',
          start: 'September 2000',
          end: 'May 2004',
          expectedEnd: null,
        },
      ],
      experience: [
        {
          id: 0,
          name: 'Googlo',
          position: 'Chef of Engine',
          city: 'City',
          state: 'State',
          start: 'May 2006',
          end: 'June 2008',
          points: ['this is some crazy ass point', 'another exciting point about how I was the Chef of Engine at Googlo'],
        },
        {
          id: 1,
          name: 'NetFile',
          position: 'Engine of Chef',
          city: 'City',
          state: 'State',
          start: 'May 2009',
          end: 'June 2015',
          points: ['this is some crazy ass point', 'another exciting point about how I was the Chef of Engine at Googlo'],
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

  handleSkillChange(ev, key, id) {
    const skills = [...this.state.skills];
    const item = { ...skills[id] };
    item[key] = ev.target.value;
    skills[id] = item;
    this.setState({ skills });
  }

  handleEducationChange(ev, key, id) {
    const education = [...this.state.education];
    const item = { ...education[id] };
    item[key] = ev.target.value;
    education[id] = item;
    this.setState({ education });
  }

  handleExperienceChange(ev, key, id) {
    const experience = [...this.state.experience];
    const item = { ...experience[id] };
    item[key] = ev.target.value;
    experience[id] = item;
    this.setState({ experience });
  }

  newSkill(ind) {
    this.setState({
      // eslint-disable-next-line react/no-access-state-in-setstate
      skills: [...this.state.skills, { id: ind, title: '', descript: '' }],
    });
  }

  newEdu(ind) {
    this.setState({
      education: [...this.state.education, {
        id: ind,
        name: '',
        city: '',
        state: '',
        degree: '',
        start: '',
        end: '',
        expectedEnd: null,
      }],
    });
  }

  newExp(ind) {
    this.setState({
      experience: [
        ...this.state.experience,
        {
          id: ind,
          name: '',
          position: '',
          city: '',
          state: '',
          start: '',
          end: '',
          points: [],
        },
      ],
    });
  }

  newExpDescription(id) {
    const experience = [...this.state.experience];
    const item = experience[id];
    item.points.push('');
    experience[id] = item;
    this.setState({ experience });
  }

  toggleSkills() {
    this.setState(({ showSkills }) => ({ showSkills: !showSkills }));
  }

  toggleEducation() {
    this.setState(({ showEducation }) => ({ showEducation: !showEducation }));
  }

  toggleExperience() {
    this.setState(({ showExperience }) => ({ showExperience: !showExperience }));
  }

  render() {
    return (
      <div className="App">
        <h1 className="header"> Resume Template</h1>
        <Form
          changeFunc={(ev, key) => this.handleChange(ev, key)}
          changeSkillFunc={(ev, key, ind) => this.handleSkillChange(ev, key, ind)}
          changeEduFunc={(ev, key, ind) => this.handleEducationChange(ev, key, ind)}
          changeExpFunc={(ev, key, ind) => this.handleExperienceChange(ev, key, ind)}
          newSkill={(ind) => this.newSkill(ind)}
          newEdu={(ind) => this.newEdu(ind)}
          newExp={(ind) => this.newExp(ind)}
          newExpDescript={(ind) => this.newExpDescription(ind)}
          toggleSkillDisplay={() => this.toggleSkills()}
          toggleEduDisplay={() => this.toggleEducation()}
          toggleExpDisplay={() => this.toggleExperience()}
          currState={this.state}
        />
        <Template
          currState={this.state}
        />
      </div>
    );
  }
}
