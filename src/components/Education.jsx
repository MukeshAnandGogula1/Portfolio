import React from 'react';
import Section from './Section';

const Education = () => {
  return (
    <Section title="Education">
      <div className="education-item">
        <h3>B.Tech — AI & ML</h3>
        <p>PACE Institute of Technology and Sciences</p>
        <p><strong>CGPA: 8.06 (Updated)</strong></p>
        <p>2023–2026</p>
      </div>
      <div className="education-item">
        <h3>Diploma — ECE</h3>
        <p>RISE Krishna Sai Polytechnic</p>
        <p>Percentage: 80.46</p>
        <p>2020–2023</p>
      </div>
      <div className="education-item">
        <h3>Secondary School Certificate</h3>
        <p>Dreams High School</p>
        <p>GPA: 10.00</p>
      </div>
    </Section>
  );
};

export default Education;
