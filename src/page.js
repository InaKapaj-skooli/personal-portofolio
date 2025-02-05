import React from "react";
import "./styles/page.css";

const projects = [
  {
    title: "Survey Form",
    description:
      "Designed and rebuilt responsive WordPress pages using HTML, CSS, and JS.",
    link: "https://github.com/InaKapaj-skooli/survey_form",
  },
  {
    title: "Crown Clothing",
    description:
      "Crown Clothing is a React-based e-commerce platform for browsing and purchasing stylish clothing, featuring a user-friendly interface, sign-in functionality, and personalized shopping experience.",
    link: "https://github.com/InaKapaj-skooli/crown-clothing",
  },
  {
    title: "Pics Generator",
    description:
      "This React project generates a custom image based on the text entered in an input field, allowing users to create unique visuals tailored to their words.",
    link: "https://github.com/InaKapaj-skooli/pics-generator",
  },
];

export default function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1 className="name-header">Ina Kapaj</h1>
      <p className="role-description">Frontend Developer | React</p>
      <section>
        <p>Tirana, Albania</p>
        <p className="about">
          I am a passionate front-end developer and dedicated to build clean and
          user-friendly web applications. My main expertise is on React, where I
          have deep knowledge and extensive experience. I am always eager to
          learn, grow, and contribute to innovative projects as a person which
          works really good in a team. I am actively seeking for opportunities
          that will help me further develop my career while adding value to
          dynamic teams.{" "}
          <p>Let's connect and build something amazing together! 🌐</p>
        </p>
      </section>
      <section className="section">
        <h2>Experience</h2>
        <div className="experiences">
          <div className="experience">
            <h3>Frontend Developer</h3>
            <p>Teach Away | Tirana, Albania</p>
            <p>Dec 2022 - Present</p>
            <p className="job-description">
              - Developed a new onboarding flow for the teacher dashboard.{" "}
              <br />
              - Worked on React.js and Next.js for improving web apps. <br />
              - Created a bulk messaging option for applicants. <br />
            </p>
          </div>
          <div className="experience">
            <h3>WordPress Developer</h3>
            <p>Teach Away | Tirana, Albania</p>
            <p>Dec 2021 - Nov 2022</p>
            <p className="job-description">
              - Designed and rebuilt responsive WordPress pages. <br />
              - Implemented effective SEO strategies. <br />
              - Built custom templates and layouts. <br />
            </p>
          </div>
        </div>
      </section>
      <section className="section">
        <h2>Education</h2>
        <div className="educations">
          <div className="education">
            <h3>Master of Science, Computer Engineering</h3>
            <p>Epoka University | Nov 2021 - Oct 2023</p>
          </div>
          <div className="education">
            <h3>Bachelor's degree, Computer Engineering</h3>
            <p>Universiteti Politeknik i Tiranës | Oct 2018 - Jul 2021</p>
          </div>
        </div>
      </section>
      <section className="section">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div key={index} className="project-card">
              <h3>{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <h2>Certifications</h2>
        <p>AWS JAM DAY - Amazon Web Services (Issued Oct 2023)</p>
        <p>Conference 2022 - GitNation Foundation (Issued Oct 2022)</p>
        <p>Responsive Web Design (Issued Jul 2022)</p>
        <p>On-Page and Technical SEO (Issued Jun 2022)</p>
      </section>
      <footer className="footer">
        <p>
          Connect with me:{" "}
          <a
            href="https://www.linkedin.com/in/ina-kapaj/"
            className="footer-link"
          >
            LinkedIn
          </a>{" "}
          |{" "}
          <a href="https://github.com/InaKapaj-skooli" className="footer-link">
            GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
