import robotImage from "../assets/ai-robot.jpg.jpeg";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>🚀 Problem Hunter AI</h1>

        <p>
          Report, track and solve community problems using AI-powered
          insights and smart analytics.
        </p>

        <button>Get Started</button>
      </div>

      <div className="hero-image">
        <img
          src={robotImage}
          alt="AI Robot"
          className="hero-img"
        />
      </div>
    </div>
  );
}

export default Hero;