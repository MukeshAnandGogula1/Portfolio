import React from 'react';
import Section from './Section';

const Contact = () => {
  return (
    <Section id="contact" title="Contact">
      <div className="contact-content">
        <p>If you'd like to get in touch, feel free to reach out via any of the options below or
        send a quick message using the form.</p>

        <ul className="contact-list">
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
      </di>
        </ul>

        <form
          className="contact-form"
          action="mailto:mukeshanandgogula@gmail.com"
          method="POST"
          encType="text/plain"
        >
          <input type="text" name="name" placeholder="Your name" required />
          <input type="email" name="email" placeholder="Your email" required />
          <textarea name="message" rows="4" placeholder="Your message" required />
          <button type="submit">Send</button>
        </form>
      </div>
    </Section>
  );
};

export default Contact;
