import React from "react";
import CallToAction from "../components/CallToAction";

const Services: React.FC = () => {
  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <p>
          Our unique approach fosters growth and collaboration, benefiting both
          innovators and influencers in a dynamic ecosystem.
        </p>
        <div className="service-grid">
          <div className="service-item">
            <h3>For Consumer Startups and Web3 Projects:</h3>
            <ul>
              <li>Access the largest pool of KOLs across all regions.</li>
              <li>
                Syndicate with major creator agencies to compete for your deal,
                with no added margins from us.
              </li>
              <li>
                Unlock funding opportunities and social capital through our
                parent company.
              </li>
            </ul>
          </div>
          <div className="service-item">
            <h3>For Influencers and KOLs:</h3>
            <ul>
              <li>
                Monetize your content with the most promising opportunities.
              </li>
              <li>
                Connect with other creators through our internal groups and
                exclusive IRL events.
              </li>
              <li>
                Gain market insights and access investment opportunities at
                exclusive valuations.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <CallToAction />
    </>
  );
};

export default Services;
