import React, { useState } from "react";
import CallToAction from "../components/CallToAction";
import useWindowSize from "../utils/useWindowsSize"; // Assurez-vous que le chemin d'importation est correct

interface ServiceItem {
  title: string;
  items: string[];
}

const ServiceItem: React.FC<ServiceItem> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { width } = useWindowSize();
  const isMobile = width ? width <= 768 : false;

  const toggleService = () => {
    if (isMobile) {
      setIsOpen(!isOpen);
    }
  };

  return (
    <div className="service-item">
      <h3
        onClick={toggleService}
        className={`service-title ${isMobile ? "clickable" : ""}`}
      >
        {title}
        {isMobile && (
          <span className={`toggle-icon ${isOpen ? "open" : ""}`}>
            {isOpen ? "-" : "+"}
          </span>
        )}
      </h3>
      <ul
        className={`service-list ${
          isMobile ? (isOpen ? "open" : "closed") : ""
        }`}
      >
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
  
    </div>
  );
};

const Services: React.FC = () => {
  const services: ServiceItem[] = [
    {
      title: "For Consumer Startups and Web3 Projects",
      items: [
        "Access the largest pool of KOLs across all regions",
        "Syndicate with major creator agencies to compete for your deal, with no added margins from us",
        "Unlock funding opportunities and social capital through our parent company",
      ],
    },
    {
      title: "For Influencers and KOLs",
      items: [
        "Monetize your content with the most promising opportunities",
        "Connect with other creators through our internal groups and exclusive IRL events",
        "Gain market insights and access investment opportunities at exclusive valuations",
      ],
    },
  ];

  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <p>
          Our unique approach fosters growth and collaboration, benefiting both
          innovators and influencers in a dynamic ecosystem.
        </p>
        <div className="service-grid">
          {services.map((service, index) => (
            <ServiceItem
              key={index}
              title={service.title}
              items={service.items}
            />
          ))}
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Services;
