/* eslint-disable react/jsx-no-bind */
import './styles/App.css';
import './styles/Template.css';
import React, { useState } from 'react';
import FormHeader from './components/FormHeader';
import FormEducation from './components/FormEducation';
import FormSkills from './components/FormSkills';
import FormExperience from './components/FormExperience';
import Header from './components/Header';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';

function App() {
  const [header, setHeader] = useState({
    first: 'First',
    last: 'Last',
    email: 'email@email.com',
    github: 'email@github.com',
  });

  const [showHeader, setShowHeader] = useState(true);

  const [education, setEducation] = useState([
    {
      id: 0,
      name: 'University of Example',
      city: 'City',
      state: 'State',
      degree: 'Bachelor of Arts',
      start: 'September 2000',
      end: 'May 2004',
      expectedEnd: '',
    },
  ]);

  const [showEducation, setShowEducation] = useState(true);

  const [skills, setSkills] = useState([
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
  ]);

  const [showSkills, setShowSkills] = useState(true);

  const [experience, setExperience] = useState([
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
  ]);

  const [showExperience, setShowExperience] = useState(true);

  function setHeaderData(ev, key) {
    setHeader({
      ...header,
      [key]: ev.target.value,
    });
  }

  function toggleHeader() {
    setShowHeader(!showHeader);
  }

  // EDUCATION
  function setEducationData(ev, key, id) {
    const educationSet = [...education];
    const item = { ...educationSet[id] };
    item[key] = ev.target.value;
    educationSet[id] = item;
    setEducation(educationSet);
  }

  function toggleEducation() {
    setShowEducation(!showEducation);
  }

  function newEdu(ind) {
    setEducation([...education, {
      id: ind,
      name: '',
      city: '',
      state: '',
      degree: '',
      start: '',
      end: '',
      expectedEnd: '',
    }]);
  }

  function rmEdu(ind) {
    const target = education.findIndex((item) => item.id === ind);
    const educationCopy = [...education];
    educationCopy.splice(target, 1);
    setEducation(educationCopy);
  }

  // SKILLS
  function setSkillsData(ev, key, id) {
    const skillSet = [...skills];
    const item = { ...skillSet[id] };
    item[key] = ev.target.value;
    skillSet[id] = item;
    setSkills(skillSet);
  }

  function toggleSkills() {
    setShowSkills(!showSkills);
  }

  function newSkill(ind) {
    setSkills(
      [...skills, { id: ind, title: '', descript: '' }],
    );
  }

  function rmSkill(ind) {
    const target = skills.findIndex((item) => item.id === ind);
    const skillsCopy = [...skills];
    skillsCopy.splice(target, 1);
    setSkills(skillsCopy);
  }

  // EXPERIENCE
  function setExperienceData(ev, key, id) {
    const experienceSet = [...experience];
    const item = { ...experienceSet[id] };
    item[key] = ev.target.value;
    experienceSet[id] = item;
    setExperience(experienceSet);
  }

  function toggleExperience() {
    setShowExperience(!showExperience);
  }

  function newExp(ind) {
    setExperience([
      ...experience,
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
    ]);
  }

  function newExpDescription(id) {
    const experienceSet = [...experience];
    const item = experienceSet[id];
    item.points.push('');
    experienceSet[id] = item;
    setExperience(experienceSet);
  }

  function expDescriptionChange(ev, id, ind) {
    const experienceSet = [...experience];
    const item = { ...experienceSet[id] };
    item.points[ind] = ev.target.value;
    experienceSet[id] = item;
    setExperience(experienceSet);
  }

  function rmExp(ind) {
    const target = experience.findIndex((item) => item.id === ind);
    const experienceCopy = [...experience];
    experienceCopy.splice(target, 1);
    setExperience(experienceCopy);
  }

  // grid grid-cols-2 gap-x-2
  return (
    <div className="App flex h-screen truncate">
      <h1 className="height-12 text-silver text-3xl text-center col-span-full"> Resume Creator</h1>
      <div className="px-7 flex justify-center pt-2">
        <div className="Template-container bg-snow">
          <Header
            headerState={header}
          />
          <Education
            educationState={education}
          />
          <Experience
            expState={experience}
          />
          <Skills
            skillState={skills}
          />
        </div>
      </div>
      <div className="Form-container w-2/5 h-screen border-8 border-solid border-white">
        <div className="bg-sgrey overflow-auto h-screen">
          <FormHeader
            headerState={header}
            setHeaderState={setHeaderData}
            togHead={toggleHeader}
            headStatus={showHeader}
          />
          <FormEducation
            education={education}
            changeFunction={setEducationData}
            togEdu={toggleEducation}
            eduStatus={showEducation}
            newEdu={newEdu}
            rmEdu={rmEdu}
          />
          <FormSkills
            skillState={skills}
            changeFunction={setSkillsData}
            togSkill={toggleSkills}
            skillStatus={showSkills}
            newSkill={newSkill}
            rmSkill={rmSkill}
          />
          <FormExperience
            expState={experience}
            changeFunction={setExperienceData}
            togExp={toggleExperience}
            expStatus={showExperience}
            newExp={newExp}
            newDescript={newExpDescription}
            changePt={expDescriptionChange}
            rmExp={rmExp}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
