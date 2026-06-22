import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <h2>Featured Problems</h2>
      <div className="cards-container"></div>

      <Card
        title="Road Damage"
        description="Report potholes and damaged roads."
      />

      <Card
        title="Water Leakage"
        description="Track and resolve water leakage issues."
      />

      <Footer />
    </>
  );
}

export default Home;