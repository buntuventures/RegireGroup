import React from "react";
import "./LandingPage.css";
import Logo from "./assets/3.png";

const App: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
      <img src={Logo} alt="RegireLogo" className="logo" />
        <h1 className="logo">Regire</h1>
        <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>

        <section className="about" id="about">
          <h3>About Regire</h3>
          <div className="about-content">
            <p>Regire connects promising Startups and web3 projects with top Key Opinion Leaders (KOLs), while offering creators access to the best vetted opportunities.</p>
            <p>As part of a leading investment holding firm, we leverage our extensive network to provide:</p>
            <ul>
              <li>Access to the largest pool of KOLs across all regions</li>
              <li> Syndication with all major KOL managers and creator agency for
              the most competitiveoffer without additional margins</li>
              <li>Data-driven insights for potential investment opportunities</li>
            </ul>
            <p>Our unique approach benefits both innovators and influencers, creating a dynamic ecosystem for growth and collaboration.</p>
          </div>
        </section>

        <section className="services" id="services">
          <h3>Our Services</h3>
          <div className="service-grid">
            <div className="service-item">
              <h4>For Startups & Projects</h4>
              <p>
                Access to the largest pool of KOLs across all regions with
                competitive terms.
              </p>
            </div>
            <div className="service-item">
              <h4>For KOLs & Influencer managers</h4>
              <p>
                Exclusive access to high-quality, vetted opportunities without
                added margins.
              </p>
            </div>
          </div>
        </section> 

        <section className="unique-value">
          <h3>Our Unique Value</h3>
          <ul>
            <li>Part of a leading investment holding firm</li>
            <li>Syndication to provode competing offer to projects without margins</li>
            <li>Data-driven approach for potential investment deals</li>
          </ul>
        </section>

        <section className="cta" id="contact">
          <h3>Join Our Network</h3>
          <p>
            Connect with the most promising projects or explore how we can
            support your launch and growth.
          </p>
          <div className="cta-buttons">
            <button className="btn primary">Join Our Network</button>
            <button className="btn secondary">Get in Touch</button>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Regire. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
