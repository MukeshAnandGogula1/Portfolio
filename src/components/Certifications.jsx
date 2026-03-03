import React from 'react';
import Section from './Section';

const certs = [
  'Palo Alto — Fundamentals of Cyber Security',
  'Cyberfrat — Cyber Security Foundations',
  'IIT Kharagpur (NPTEL) — Privacy & Security on Social Media',
  'Google Cloud — Generative AI',
];

const Certifications = () => {
  return (
    <Section title="Certifications">
      <ul className="cert-list">
        {certs.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
    </Section>
  );
};

export default Certifications;
