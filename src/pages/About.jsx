import "../styles/About.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import hero from "../assets/hero.png";
import {
  FaExclamationTriangle,
  FaChartBar,
  FaRobot,
  FaSearch,
  FaLock,
  FaMobileAlt,
} from "react-icons/fa";

function About() {
  return (
    <>
      <Navbar />

      <section className="about-hero">
        <div className="about-content">
          <h1>About Problem Hunter AI</h1>

          <p>
            Problem Hunter AI is a modern web application that helps users
            report, manage, and track real-world community problems through an
            intelligent and user-friendly platform.
          </p>

          <button>Explore Dashboard</button>
        </div>

        <div className="about-image">
          <img src={hero} alt="Problem Hunter AI" />
        </div>
      </section>

      <section className="mission">
  <h2>Our Mission</h2>

  <p>
    Our mission is to empower communities by providing a simple and intelligent
    platform where users can report, track, and manage local problems
    efficiently. We believe technology should make cities cleaner, safer,
    and better connected.
  </p>
</section>
     
      <section className="features">

  <h2>Key Features</h2>

  <div className="feature-grid">

    <div className="feature-card">
      <FaExclamationTriangle className="feature-icon" />
      <h3>Report Problems</h3>
      <p>Quickly report issues happening in your community.</p>
    </div>

    <div className="feature-card">
      <FaChartBar className="feature-icon" />
      <h3>Dashboard</h3>
      <p>Track and manage all reported problems efficiently.</p>
    </div>

    <div className="feature-card">
      <FaRobot className="feature-icon" />
      <h3>AI Ready</h3>
      <p>Future-ready platform with AI-powered smart suggestions.</p>
    </div>

    <div className="feature-card">
      <FaSearch className="feature-icon" />
      <h3>Search & Filter</h3>
      <p>Find problems instantly using smart filtering options.</p>
    </div>

    <div className="feature-card">
      <FaLock className="feature-icon" />
      <h3>Secure Login</h3>
      <p>JWT authentication keeps your account protected.</p>
    </div>

    <div className="feature-card">
      <FaMobileAlt className="feature-icon" />
      <h3>Responsive Design</h3>
      <p>Works seamlessly on desktop, tablet and mobile devices.</p>
    </div>

  </div>

</section>
      <section className="tech-stack">

  <h2>Technology Stack</h2>

  <div className="tech-grid">

    <div className="tech-card">
      <h3>Frontend</h3>
      <p>React.js</p>
      <p>Vite</p>
      <p>CSS3</p>
    </div>

    <div className="tech-card">
      <h3>Backend</h3>
      <p>Node.js</p>
      <p>Express.js</p>
    </div>

    <div className="tech-card">
      <h3>Database</h3>
      <p>MongoDB Atlas</p>
      <p>Mongoose</p>
    </div>

    <div className="tech-card">
      <h3>Security</h3>
      <p>JWT Authentication</p>
      <p>bcrypt</p>
      <p>Rate Limiting</p>
    </div>

  </div>

</section>
      <Footer />
    </>
  );
}

export default About;