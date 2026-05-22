import { Button, Container } from "react-bootstrap";
import HeroBg from "../../assets/hero-image.png";
import "./Hero.css";

export default function HeroSection() {
  return (
    <section 
        className="hero-section"
        style={{
            backgroundImage: `url(${HeroBg})`
        }}
    >

      <div className="hero-overlay"></div>

      <Container className="hero-content">

        <div className="hero-left">
          <h1>
            Ideas.<br />
            Code.<br />

            <span className="hero-accent">
              Inspiration.
            </span>
          </h1>

          <p>
            Api-Blog is a space for developers
            to share ideas and experiences.
          </p>

          <div className="hero-buttons">
            <Button className="hero-btn">
              Explore Posts 
            </Button>

            <Button variant="outline-light">
              Create Account
            </Button>
          </div>

        </div>

      </Container>

    </section>
  );
}