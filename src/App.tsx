import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Logo from "./assets/R_Logo-02.png";
import About from "./pages/About";
import Services from "./pages/Services";

const App: React.FC = () => {
  return (
    <Router>
      <div className="landing-page">
        <header className="header">
          <div className="header-content">
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <nav>
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* <footer className="footer">
          <p>&copy; 2024 Regire. All rights reserved.</p>
        </footer> */}
      </div>
    </Router>
  );
};

const Home: React.FC = () => (
  <>
    <section className="hero">
      <div className="preaction">
        <img src={Logo} alt="RegireLogo" className="logoFoot" />
        <h1 className="regire">Regire</h1>
      </div>
      <a href="mailto:hello@regire.com" className="hero-subtitle">
        hello@regire.com
      </a>
    </section>
  </>
);

export default App;
