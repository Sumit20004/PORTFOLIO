import React from "react";
import "./about.css";
import profile_img from "../../assets/sumit-theme.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      {/* === Heading === */}
      <h1 className="about-heading">
        About <span>Me</span>
      </h1>

      <div className="about-container">
        {/* LEFT SIDE - IMAGE */}
        <div className="about-image">
          <img src={profile_img} alt="Sumit Chaira" />
        </div>

        {/* RIGHT SIDE - CONTENT */}
        <div className="about-content">
          <p>
            Hi, I'm Sumit Chaira, a passionate AI/ML Engineer and Web Developer
            pursuing a B.Tech in Computer Science and Engineering at the
            University of Engineering and Management, Kolkata (2022–2026). With
            a solid foundation in Python, Data Structures & Algorithms, HTML,
            CSS, and Web Development, I love building intelligent systems and
            user-friendly web applications. My academic journey and hands-on
            projects — like Smart Safety Gear Detection and Answer Sheet Checker
            — reflect my interest in combining machine learning with real-world
            problem-solving.
          </p>

          <p>
            I’ve also completed internships at CodSoft and Oasis Infobyte, where
            I enhanced my web development and teamwork skills. I take pride in
            my ability to adapt, collaborate, and deliver results under tight
            deadlines. When I’m not coding, you’ll find me playing football,
            cooking, or exploring new tech trends. I believe in continuous
            learning and strive to create technology that makes a difference.
          </p>
        </div>
      </div>

      {/* === Skills Section === */}
      <div className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
            />
            <p>HTML</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
            />
            <p>CSS</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JavaScript"
            />
            <p>JavaScript</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="React"
            />
            <p>React</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="Node.js"
            />
            <p>Node JS</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="Express.js"
            />
            <p>Express JS</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
              alt="MongoDB"
            />
            <p>MongoDB</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
            />
            <p>Python</p>
          </div>
          <div className="skill-item">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
              alt="C Programming"
            />
            <p>C Programming</p>
          </div>
        </div>
      </div>

      {/* === Achievements Section === */}
      <div className="about-achievements">
        <div className="achievement">
          <h1>2+</h1>
          <p>Years of Experience</p>
        </div>
        <div className="achievement">
          <h1>10+</h1>
          <p>Projects Completed</p>
        </div>
        <div className="achievement">
          <h1>15+</h1>
          <p>Happy Clients</p>
        </div>
      </div>
    </section>
  );
};

export default About;
