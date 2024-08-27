import React from "react";
import CallToAction from "../components/CallToAction";

const About: React.FC = () => {
  return (
    <>
      <section className="about">
        <div className="about-content">
          <h2>We Are Regire</h2>
          <div className="about-text">
            <p>
              Regire connects promising consumer startups and web3 projects with
              major influencers and top KOLs, while offering creators access to
              the best vetted opportunities.
            </p>
            <p>
              We're not an agency; we're a strategic network. Owned by a leading
              investment holding, we leverage the data we collect and the
              relationships we build to deliver exceptional value.
            </p>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default About;
