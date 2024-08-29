import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Logo from "./assets/R_Logo-02.png";
import About from "./pages/About";
import Services from "./pages/Services";
import useWindowSize from "./utils/useWindowsSize";

const RouteTitle = () => {
  const location = useLocation();
  const getTitle = () => {
    switch (location.pathname) {
      case "/":
        return "Home";
      case "/about":
        return "About";
      case "/services":
        return "Services";
      default:
        return "";
    }
  };
  return <span className="route-title">{getTitle()}</span>;
};

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const windowSize = useWindowSize();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isMobile = windowSize.width !== undefined && windowSize.width <= 768;

  return (
    <Router>
      <div className="landing-page">
        <header className="header">
          <div className="header-content">
            <nav>
              <Link to="/">Home</Link>
            </nav>
            <nav className="desktop-nav">
              <Link to="/about">About</Link>
              <Link to="/services">Services</Link>
            </nav>
            {isMobile && <RouteTitle />}
            {isMobile && (
              <button
                className={`hamburger-button ${isMobileMenuOpen ? "open" : ""}`}
                onClick={toggleMobileMenu}
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            )}
          </div>
        </header>

        {isMobile && (
          <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
            <nav>
              <Link to="/" onClick={toggleMobileMenu}>
                Home
              </Link>
              <Link to="/about" onClick={toggleMobileMenu}>
                About
              </Link>
              <Link to="/services" onClick={toggleMobileMenu}>
                Services
              </Link>
            </nav>
          </div>
        )}

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>

        {/* <footer className="footer">
          <p>
            <a href="mailto:hello@regire.com" className="hero-subtitle">
              hello@regire.com
            </a>
          </p>
        </footer> */}
      </div>
    </Router>
  );
};

const Home: React.FC = () => (
  <>
    <section className="hero">
      <div className="home-container">
        <div className="logo-large">
          <img src={Logo} alt="Regire Logo" />
        </div>
        <a href="mailto:hello@regire.com" className="hero-subtitle">
          hello@regire.com
        </a>
      </div>
      <div className="preaction">
        <img src={Logo} alt="RegireLogo" className="logoFoot" />
        <h1 className="regire">Regire</h1>
      </div>
    </section>
  </>
);

export default App;
