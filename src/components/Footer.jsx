import "./Footer.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">
          <h2>Problem Hunter AI</h2>

          <p>
            Building smarter communities through intelligent technology and
            modern web solutions.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/login">Login</a>
        </div>

        <div className="footer-section">
          <h3>Connect</h3>

          <a
            href="https://github.com/utkarshdubey535"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub /> GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/utkarsh-kumar-dubey-1853412bb"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>

          <a
            href="https://www.instagram.com/utkarshdubey535"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram /> Instagram
          </a>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>

          <p><FaEnvelope /> utkarshd281@gmail.com</p>

          <p><FaPhone /> +91 7488735693</p>

          <p><FaMapMarkerAlt /> Ranchi, Jharkhand, India</p>
        </div>

      </div>

      <div className="footer-bottom">

        © 2026 Problem Hunter AI |
        Designed & Developed with ❤️ by
        <strong> Utkarsh Kumar Dubey</strong>

      </div>

    </footer>
  );
}

export default Footer;