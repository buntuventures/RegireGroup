import React from "react";
import "./LandingPage.css";
import Logo from "./assets/3.png";

const LandingPage: React.FC = () => {
  return (
    <div className="landing-page">
      <header className="header">
        <img src={Logo} alt="RegireLogo" className="logo" />
        {/* <nav>
          <a href="#about">About</a>
          <a href="#services">Services</a>
        </nav> */}
      </header>

      <main>
        <section className="about" id="about">
          <h3>We are Regire</h3>
          <div className="about-content">
            <p>
              Regire connects promising Startups and web3 projects with top Key
              Opinion Leaders (KOLs), while offering creators access to the best
              vetted opportunities.
            </p>
            <p>
              As part of a leading investment holding firm, we leverage our
              extensive network to provide:
            </p>
            <ul>
              <li>Access to the largest pool of KOLs across all regions</li>
              <li>
                Syndication with all major KOL managers and creator agency for
                the most competitiveoffer without additional margins
              </li>
              <li>
                Data-driven insights for potential investment opportunities
              </li>
            </ul>
            <p>
              Our unique approach benefits both innovators and influencers,
              creating a dynamic ecosystem for growth and collaboration.
            </p>
          </div>
        </section>

        <div className="preaction">
          <img src={Logo} alt="RegireLogo" className="logoFoot" />
          <h1 className="regire">Regire</h1>
        </div>

        <section className="cta" id="contact">
          <h3>Join Our Network</h3>
          <p>
            Connect with the most promising projects or explore how we can
            support your launch and growth.
          </p>
          <div className="cta-buttons">
          <a href="mailto:jesse@regiregroup.com" className="btn primary">Join Our Network</a>
            {/* <button className="btn secondary">Get in Touch</button> */}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; 2024 Regire. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
