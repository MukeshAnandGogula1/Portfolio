import React from 'react';
import { motion } from 'framer-motion';
import './Header.css';

const Header = () => {
  return (
    <motion.header
      className="header"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1>Mukesh Anand Gogula</h1>
      <p className="subtitle">AI & ML Enthusiast | Software Developer  </p>
      <div className="links">
        <a
          href="https://www.linkedin.com/in/mukesh-anand-gogula-495115291"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/MukeshAnandGogula1"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <a href="mailto:mukeshanandgogula@gmail.com">Email</a>
        <a href="#contact">Contact</a>
      </div>
    </motion.header>
  );
};

export default Header;
