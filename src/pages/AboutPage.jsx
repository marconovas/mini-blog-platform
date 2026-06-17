import Navigation from "../components/layout/Navigation.jsx";
import Footer from "../components/layout/Footer.jsx";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";

import {
  SiPostgresql,
  SiPrisma
} from "react-icons/si";

import "./AboutPage.css";

export default function AboutPage() {
  return (
    <>
      <Navigation />

      <main className="about-page">

        {/* HERO */}
        <section className="about-hero">

          <span className="about-badge">
            About Api-Blog
          </span>

          <h1>
            Share Ideas.
            <span> Learn Together.</span>
          </h1>

          <p>
            A modern blogging platform where developers can
            publish content, discuss ideas and grow together.
          </p>

        </section>

        {/* DESCRIPTION */}
        <section className="about-section">

          <h2>What is Api-Blog?</h2>

          <p>
            Api-Blog is a community-driven platform where users
            can create posts, share knowledge and participate
            in discussions through comments.
          </p>

          <p>
            The goal of this project is to provide a complete
            full-stack blogging experience while learning modern
            web development technologies.
          </p>

        </section>

        {/* FEATURES */}
        <section className="about-section">

          <h2>Features</h2>

          <div className="features-list">

            <div className="feature-box">
              ✓ Create and publish posts
            </div>

            <div className="feature-box">
              ✓ Edit your content
            </div>

            <div className="feature-box">
              ✓ Participate in discussions
            </div>

            <div className="feature-box">
              ✓ Manage your profile
            </div>

            <div className="feature-box">
              ✓ Secure JWT authentication
            </div>

          </div>

        </section>

        {/* TECH STACK */}
        <section className="about-section">

          <h2>Tech Stack</h2>

          <div className="tech-grid">

            <div className="tech-card">
              <FaReact />
              <h3>Frontend</h3>
              <p>React & React Router</p>
            </div>

            <div className="tech-card">
              <FaNodeJs />
              <h3>Backend</h3>
              <p>Node.js & Express</p>
            </div>

            <div className="tech-card">
              <SiPostgresql />
              <h3>Database</h3>
              <p>PostgreSQL & Prisma</p>
            </div>

            <div className="tech-card">
              <SiPrisma />
              <h3>ORM</h3>
              <p>Prisma ORM</p>
            </div>

          </div>

        </section>

        {/* DEVELOPER */}
        <section className="developer-section">

          <h2>
            Developed by Marco Novas
          </h2>

          <p>
            Full-stack learning project focused on React,
            Node.js, APIs, authentication and database design.
          </p>

          <div className="developer-links">

            <a href="#">
              <FaGithub />
              <a href="https://github.com/marconovas">Github</a>
            </a>

            <a href="#">
              <FaLinkedin />
              <a href="https://www.linkedin.com/in/marco-nicol%C3%A1s-novas-medina-214613356/">LinkedIn</a>
            </a>

          </div>

        </section>

      </main>

      <Footer />
    </>
  );
}