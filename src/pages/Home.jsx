import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/problems")
      .then((res) => res.json())
      .then((data) => setProblems(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <>
      <Navbar />
      <Hero />

      <h2>Featured Problems</h2>

      <div className="cards-container">
        {problems.map((problem) => (
          <Card
            key={problem.id}
            title={problem.title}
            description={problem.description}
          />
        ))}
      </div>

      <Footer />
    </>
  );
}

export default Home;