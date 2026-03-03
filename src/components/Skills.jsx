import React from 'react';
import Section from './Section';

const skills = [
  'Python',
  'SQL',
  'Cybersecurity',
  'HTML',
  'CSS',
  'JavaScript',
  'Computer Networks',
  'OOP',
  'Pandas',
  'NumPy',
  'Matplotlib',
];

const Skills = () => {
  return (
    <Section title="Skills">
      <div className="skills-container">
        {skills.map((skill) => (
          <span key={skill} className="skill-badge">
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
};

export default Skills;
