import React from "react";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const About = () => {
  return (
    <div>
      <Navbar />

      {/* Light orange background wrapper */}
      <div style={{ backgroundColor: "#fff4e5", minHeight: "100vh", padding: "40px 0" }}>
        <section className="container">
          {/* Contact Info */}
          <div className="mb-4 text-center">
            <h1 className="mb-1">Suresh Banoth</h1>
            <p className="mb-0">San Francisco, CA</p>
            <p className="mb-0">📞 (415) 494-1637 | 📧 sureshbanoth0397@gmail.com</p>
            <p>
              <a
                href="https://www.linkedin.com/in/suresh0397/"
                target="_blank"
                rel="noopener noreferrer"
                className="me-3"
              >
                LinkedIn
              </a>
              <a href="https://github.com/Suresh-Banoth7/react-pro" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </p>
          </div>

          {/* Professional Summary */}
          <section className="mb-5">
            <h2>Professional Summary</h2>
            <p>
              Java Backend Developer with 1.5 years of experience building scalable APIs and microservices using Spring Boot, REST, and AWS.
              Delivered 80% faster API performance, improved database efficiency by 45%, and implemented secure user authentication systems.
              Currently pursuing an M.S. in IT & Management (GPA: 3.93) with a strong focus on backend development and cloud infrastructure.
            </p>
          </section>

          {/* Skills */}
          <section className="mb-5">
            <h2>Skills</h2>
            <div className="row">
              <div className="col-md-6">
                <h5>Languages</h5>
                <p>Java, Python, JavaScript, SQL, HTML/CSS, OOP, Data Structures, Algorithms</p>
                <h5>Frameworks</h5>
                <p>Spring Boot, React, Angular, Node.js, Redux</p>
                <h5>Tools</h5>
                <p>Git, GitHub, Docker, Jenkins, Postman, VS Code, Eclipse, Jira, CI/CD</p>
              </div>
              <div className="col-md-6">
                <h5>Cloud</h5>
                <p>AWS (EC2, S3, RDS)</p>
                <h5>Databases</h5>
                <p>MySQL, PostgreSQL, Oracle, AWS RDS</p>
                <h5>Security</h5>
                <p>JWT, Spring Security</p>
                <h5>Data/BI</h5>
                <p>Tableau, ETL, Data Analysis</p>
                <h5>Networking</h5>
                <p>TCP/IP, Networking Protocols, Operating Systems</p>
              </div>
            </div>
          </section>

          {/* Experience */}
          <section className="mb-5">
            <h2>Experience</h2>
            <div>
              <h5>Infosys | Java Backend Developer</h5>
              <small className="text-muted">Feb 2023 - Aug 2023</small>
              <ul>
                <li>Reduced API latency by 80% using multi-threading, cutting data load times from 5s to 1s.</li>
                <li>Wrote 10K+ lines of Java code, enabling 15% faster feature deployment.</li>
                <li>Enhanced database queries improving performance by 45%, reducing query time from 1.1s to 600ms.</li>
                <li>Secured 2000+ users with JWT-based authentication and Spring Security.</li>
                <li>Implemented JWT flows reducing unauthorized access attempts by 90%.</li>
                <li>Used Git version control to reduce merge conflicts by 30%, improving collaboration.</li>
              </ul>
            </div>
            <div>
              <h5>Infosys | Java Developer Intern</h5>
              <small className="text-muted">Mar 2022 - Jan 2023</small>
              <ul>
                <li>Developed 6+ microservices improving reliability and reducing downtime by 20%.</li>
                <li>Contributed to 20+ Agile sprints, boosting feature delivery by 10%.</li>
                <li>Created 10+ UI components with React and Angular enhancing user experience.</li>
                <li>Resolved 10+ critical production issues increasing uptime by 25%.</li>
                <li>Deployed backend systems on AWS EC2 supporting 5000+ concurrent users.</li>
              </ul>
            </div>
          </section>

          {/* Education */}
          <section className="mb-5">
            <h2>Education</h2>
            <div>
              <h5>Golden Gate University</h5>
              <small className="text-muted">Sep 2023 - Apr 2025</small>
              <p>Master of Science, Information Technology & Management (GPA: 3.93/4.0) - Dean's List</p>
            </div>
            <div>
              <h5>Indian Institute of Information Technology, Allahabad</h5>
              <small className="text-muted">Jun 2015 - Sep 2019</small>
              <p>Bachelor of Technology, Electronics & Communication Engineering (GPA: 6.86) - Honors Graduate</p>
            </div>
          </section>

          {/* Projects */}
          <section className="mb-5">
            <h2>Projects</h2>
            <div>
              <h5>BookBazaar — Spring Boot REST API</h5>
              <ul>
                <li>Created RESTful APIs with layered architecture managing 1000+ books.</li>
                <li>Added exception handling, asynchronous tasks, and 20+ integration tests using H2 and @SpringBootTest.</li>
              </ul>
            </div>
            <div>
              <h5>React E-Commerce App</h5>
              <ul>
                <li>Developed responsive UI supporting 100+ products using React and Redux Toolkit.</li>
                <li>Integrated Firebase authentication and designed JWT-ready backend.</li>
                <li>Implemented async cart with Redux Toolkit and styled 10+ UI pages using Flexbox/Grid.</li>
              </ul>
            </div>
          </section>

          {/* Certifications */}
          <section className="mb-5">
            <h2>Certifications</h2>
            <ul>
              <li>Java SE11 Developer: Infosys, Feb 2023</li>
              <li>Spring Associate: Infosys, Mar 2023</li>
              <li>Angular Professional: Infosys, Jul 2022</li>
              <li>Agile Developer Certification: Infosys, Feb 2023</li>
              <li>More certifications listed on LinkedIn</li>
            </ul>
          </section>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default About;
