import React from "react";

const Footer = () => {
  return (
    <footer className="bg-dark text-light pt-4 pb-3 mt-5">
      <div className="container">
        <div className="row">

          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5>Authentication System</h5>
            <p>
              Secure user authentication built with Spring Boot and React.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="#features" className="text-light text-decoration-none">Features</a></li>
              <li><a href="#contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: <a href="mailto:ss7774793@gmail.com" className="text-light">ss7774793@gmail.com</a></p>
            <div>
              <a
                href="https://github.com/yourgithub" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light me-3 fs-4"
                aria-label="GitHub"
              >
                <i className="bi bi-github"></i>
              </a>
              <a
                href="https://linkedin.com/in/yourlinkedin" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light me-3 fs-4"
                aria-label="LinkedIn"
              >
                <i className="bi bi-linkedin"></i>
              </a>
              <a
                href="https://twitter.com/yourtwitter" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-light fs-4"
                aria-label="Twitter"
              >
                <i className="bi bi-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light" />
        <p className="text-center mb-0">&copy; {new Date().getFullYear()} Authentication System. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
