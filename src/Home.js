import React from "react";
import Navbar from "./NavBar/Navbar";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h1 className="display-4">Authentication System</h1>
          <p className="lead">
            Secure and robust user authentication with Spring Boot and React.
          </p>
          <a href="#features" className="btn btn-light btn-lg mt-3">
            Explore Features
          </a>
        </div>
      </section>

      {/* About / Resume Section */}
      <section className="py-5">
        <div className="container">
          <h2 className="mb-4">About This Project</h2>
          <p>
            This Authentication System is built with a strong backend powered by Spring Boot, 
            providing secure login, registration, and password management functionalities.
            It uses JWT tokens for stateless and scalable authentication and role-based access control.
          </p>
          <p>
            The backend integrates MySQL for data persistence, Hibernate for ORM, and Spring Security 
            for authentication and authorization. Email integration allows password reset functionality.
          </p>
          <p>
            This project demonstrates best practices in security, validation, and clean architecture 
            principles. It serves as a foundation for building scalable and secure web applications.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-light py-5">
        <div className="container">
          <h2 className="mb-4 text-center">Key Features</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <h5>User Registration</h5>
              <p>
                Secure signup with validation including email, password strength, and mobile number verification.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>JWT Authentication</h5>
              <p>
                Stateless session management with JSON Web Tokens ensuring secure API access.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Role-Based Access</h5>
              <p>
                Different user roles (Admin, User) with route protection and authorization.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Password Encryption</h5>
              <p>
                Passwords are securely stored using BCrypt hashing.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Email Integration</h5>
              <p>
                SMTP setup for sending password reset emails and notifications.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <h5>Exception Handling</h5>
              <p>
                Global exception handling for smooth user experience and clear error messages.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Technologies Used</h2>
          <div className="d-flex justify-content-center flex-wrap gap-3">
            <span className="badge bg-primary fs-5">Spring Boot</span>
            <span className="badge bg-success fs-5">Spring Security</span>
            <span className="badge bg-danger fs-5">MySQL</span>
            <span className="badge bg-info text-dark fs-5">Hibernate</span>
            <span className="badge bg-warning text-dark fs-5">JWT</span>
            <span className="badge bg-secondary fs-5">SMTP Email</span>
            <span className="badge bg-dark fs-5">React</span>
            <span className="badge bg-primary fs-5">Bootstrap</span>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-primary text-white text-center py-5">
        <div className="container">
          <h3>Ready to build secure apps?</h3>
          <p>Start exploring the project or contribute to make it better.</p>
          <a href="#features" className="btn btn-light btn-lg">
            Get Started
          </a>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;
