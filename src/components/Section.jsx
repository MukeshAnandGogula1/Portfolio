import React from 'react';
import { motion } from 'framer-motion';

const Section = ({ title, children, ...props }) => {
  return (
    <motion.section
      {...props}
      className="section"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">{title}</h2>
      <div className="section-content">{children}</div>
    </motion.section>
  );
};

export default Section;
