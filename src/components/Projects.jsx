import React from 'react';
import Section from './Section';

const projects = [
  {
    title: "Alzheimer’s Disease Prediction Model Using Deep Learning With 3D MRI Images",
    description:
      "A deep-learning medical imaging system for detecting Alzheimer’s using 3D MRI brain scans with preprocessing pipelines, voxel analysis, and 3D CNN architecture.",
    tech: "Python, TensorFlow/PyTorch, 3D CNNs, Medical Imaging (NIfTI)",
    color: '#5cacee',
  },
  {
    title: 'Automobile Crash Detection System',
    description: 'Mobile crash detection app using sensors.',
    tech: 'Android Studio, Kotlin/Java, GPS, Firebase',
    color: '#7cfc00',
  },
  {
    title: 'Mercedes-Benz Showcase Website',
    description: 'Responsive automobile showcase site.',
    tech: 'HTML, CSS, JavaScript',
    color: '#ff6347',
  },
  {
    title: 'Cybersecurity Labs & CTFs',
    description: 'Hands-on labs with encryption, networking, and security challenges.',
    tech: 'Python, Security Tools',
    color: '#ffd700',
  },
];

const Projects = () => {
  return (
    <Section title="Projects">
      <div className="projects-container">
        {projects.map((proj) => (
          <div
            key={proj.title}
            className="project-card"
            style={{ borderLeft: `8px solid ${proj.color}` }}
          >
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p className="tech">Tech: {proj.tech}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
