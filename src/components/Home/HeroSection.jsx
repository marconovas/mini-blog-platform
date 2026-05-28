import { Button, Container } from "react-bootstrap";
import HeroBg from "../../assets/hero-image.png";
import "./Hero.css";
import { Link } from "react-router-dom";

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
            <Link to={"/posts"} className="hero-btn">
              Explore Posts 
            </Link>

            <Button 
              as={Link}
              to={"/register"}
              variant="outline-light"
            >
              Create Account
            </Button>
          </div>

        </div>

      </Container>

    </section>
  );
}