import React from 'react';
import { motion } from 'framer-motion';
import profileImage from '../assets/profile.jpg';

const Profile = () => {
  return (
    <motion.section
      className="profile-section"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="profile-card">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <div className="profile-text">
          <h2>Mukesh Anand Gogula</h2>
          <p>
            B.Tech AI & ML student passionate about building intelligent systems,
            solving real-world problems, and exploring new Tools, Deep learning,
            and full-stack development.
          </p>
        </div>
      </div>
    </motion.section>
  );
};

export default Profile;
