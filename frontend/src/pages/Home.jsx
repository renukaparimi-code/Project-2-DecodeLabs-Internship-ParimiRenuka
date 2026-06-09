import Navbar from "../components/Navbar";
import "../styles/Home.css";
import Footer from "../components/Footer";
function Home() {

  return (
    <div className="home">

      <Navbar />

      <section className="hero">

        <div className="hero-left">

          <h1>
            Explore The
            Human Nervous
            System
          </h1>

          <p>
            Learn about neurons, the brain and spinal cord
            through an interactive learning platform.
          </p>

          <button>
            Explore Components
          </button>

        </div>

        <div className="hero-right">

          <img
            src="https://images.unsplash.com/photo-1530026405186-ed1f139313f8"
            alt="brain"
          />

        </div>

      </section>
      <Footer />

    </div>
  );
}

export default Home;