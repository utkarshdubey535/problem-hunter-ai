import ScrollToTopButton from "../components/ScrollToTopButton";
import ScrollProgress from "../components/ScrollProgress";
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
      <ScrollProgress />
      <Navbar />

      <section className="about-hero" data-aos="fade-up">
        <div className="about-content">

  <span className="hero-badge">
    🚀 AI Powered Community Platform
  </span>

  <h1>About Problem Hunter AI</h1>
          <h1>About Problem Hunter AI</h1>

          <p>
            Problem Hunter AI is a modern web application that helps users
            report, manage, and track real-world community problems through an
            intelligent and user-friendly platform.
          </p>

          <a href="/dashboard" className="hero-btn">
  Explore Dashboard
</a>
        </div>

        <div className="about-image">
          <img src={hero} alt="Problem Hunter AI" />
        </div>
      </section>

      <section className="mission" data-aos="fade-up">
  <h2>Our Mission</h2>

  <p>
    Our mission is to empower communities by providing a simple and intelligent
    platform where users can report, track, and manage local problems
    efficiently. We believe technology should make cities cleaner, safer,
    and better connected.
  </p>
</section>
     
      <section className="features" data-aos="zoom-in">
  <h2>Key Features</h2>

  <div className="feature-card" data-aos="flip-left">

    <div className="feature-card" data-aos="flip-left">
      <FaExclamationTriangle className="feature-icon" />
      <h3>Report Problems</h3>
      <p>Quickly report issues happening in your community.</p>
    </div>

    <div className="feature-card" data-aos="flip-left">
      <FaChartBar className="feature-icon" />
      <h3>Dashboard</h3>
      <p>Track and manage all reported problems efficiently.</p>
    </div>

    <div className="feature-card" data-aos="flip-left">
      <FaRobot className="feature-icon" />
      <h3>AI Ready</h3>
      <p>Future-ready platform with AI-powered smart suggestions.</p>
    </div>

    <div className="feature-card" data-aos="flip-left">
      <FaSearch className="feature-icon" />
      <h3>Search & Filter</h3>
      <p>Find problems instantly using smart filtering options.</p>
    </div>

    <div className="feature-card" data-aos="flip-left">
      <FaLock className="feature-icon" />
      <h3>Secure Login</h3>
      <p>JWT authentication keeps your account protected.</p>
    </div>

    <div className="feature-card" data-aos="flip-left">
      <FaMobileAlt className="feature-icon" />
      <h3>Responsive Design</h3>
      <p>Works seamlessly on desktop, tablet and mobile devices.</p>
    </div>

  </div>

</section>
      <section className="tech-stack" data-aos="fade-right">

  <h2>Technology Stack</h2>

  <div className="tech-grid">

    <div className="tech-card" data-aos="fade-up">
      <h3>Frontend</h3>
      <p>React.js</p>
      <p>Vite</p>
      <p>CSS3</p>
    </div>

    <div className="tech-card" data-aos="fade-up">
      <h3>Backend</h3>
      <p>Node.js</p>
      <p>Express.js</p>
    </div>

    <div className="tech-card" data-aos="fade-up">
      <h3>Database</h3>
      <p>MongoDB Atlas</p>
      <p>Mongoose</p>
    </div>

    <div className="tech-card" data-aos="fade-up">
      <h3>Security</h3>
      <p>JWT Authentication</p>
      <p>bcrypt</p>
      <p>Rate Limiting</p>
    </div>

  </div>

</section>
      <section className="roadmap">

  <h2>Future Roadmap</h2>

  <div className="roadmap-card" data-aos="zoom-in">

    <div className="roadmap-card" data-aos="zoom-in">
      <h3>📍 Live Maps</h3>
      <p>
        Show reported problems directly on an interactive map for better
        visualization.
      </p>
    </div>

    <div className="roadmap-card" data-aos="zoom-in">
      <h3>🤖 AI Analysis</h3>
      <p>
        Automatically analyze reports and suggest the best solution using AI.
      </p>
    </div>

    <div className="roadmap-card" data-aos="zoom-in">
      <h3>📱 Mobile App</h3>
      <p>
        Android and iOS application for reporting problems from anywhere.
      </p>
    </div>

    <div className="roadmap-card" data-aos="zoom-in">
      <h3>🏆 Community Rewards</h3>
      <p>
        Reward active users with points and badges for helping the community.
      </p>
    </div>

  </div>

</section>
      <section className="developer" data-aos="zoom-in-up">

  <h2>Meet the Developer</h2>

  <div className="developer-card">

    <img
      src={hero}
      alt="Utkarsh Kumar Dubey"
      className="developer-img"
    />

    <div className="developer-info">

      <h3>Utkarsh Kumar Dubey</h3>

      <h4>BCA Student | Full Stack Developer | Cloud Engineering Enthusiast</h4>

      <p>
        Hello! I'm <strong>Utkarsh Kumar Dubey</strong>, a BCA student with a
        strong passion for Full Stack Web Development, Cloud Computing,
        Artificial Intelligence, and modern technologies.
        I enjoy building real-world applications that solve practical problems
        and continuously improving my skills through hands-on projects and
        internships.
      </p>

      <div className="developer-skills">
        <span>React.js</span>
        <span>Node.js</span>
        <span>Express.js</span>
        <span>MongoDB</span>
        <span>JavaScript</span>
        <span>REST API</span>
        <span>Git & GitHub</span>
        <span>Cloud Computing</span>
      </div>

      <p>
        <strong>Currently Open To:</strong> Internship Opportunities •
        Full Stack Development • Cloud Engineering
      </p>

      <div className="developer-buttons">

        <a
          href="https://github.com/utkarshdubey535"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <a
          href="https://www.linkedin.com/in/utkarsh-kumar-dubey-1853412bb?utm_source=share_via&utm_content=profile&utm_medium=member_android"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>

      </div>

    </div>

  </div>

</section>
      <section className="stats" data-aos="fade-up">
  <h2>Project Statistics</h2>

  <div className="stats-grid">

    <div className="stat-card" data-aos="flip-up">
      <h1>100+</h1>
      <p>Problem Reports</p>
    </div>

    <div className="stat-card" data-aos="flip-up">
      <h1>50+</h1>
      <p>Active Users</p>
    </div>

    <div className="stat-card" data-aos="flip-up">
      <h1>95%</h1>
      <p>User Satisfaction</p>
    </div>

    <div className="stat-card" data-aos="flip-up">
      <h1>24/7</h1>
      <p>Platform Availability</p>
    </div>

  </div>

</section>
      <section className="cta" data-aos="zoom-in">

  <h2>Let's Build Smarter Communities Together</h2>

  <p>
    Join Problem Hunter AI and help create a safer, cleaner, and smarter society
    by reporting and tracking community problems efficiently.
  </p>

  <a href="/login" className="cta-btn">
  Get Started
</a>
</section>
      <ScrollToTopButton />
<Footer />
      <Footer />
    </>
  );
}

export default About;