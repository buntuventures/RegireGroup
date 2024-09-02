import React, { useState } from "react";
import CallToAction from "../components/CallToAction";
import useWindowSize from "../utils/useWindowsSize";

interface ServiceItem {
  title: string;
  items: string[];
}

const ServiceAccordionItem: React.FC<
  ServiceItem & { isOpen: boolean; toggleOpen: () => void }
> = ({ title, items, isOpen, toggleOpen }) => {
  return (
    <div className={`accordion-item ${isOpen ? "open" : ""}`}>
      <button className="accordion-header" onClick={toggleOpen}>
        <span className="accordion-title">{title}</span>
        <span className="accordion-icon">{isOpen ? "-" : "+"}</span>
      </button>
      <div className="accordion-content">
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const { width } = useWindowSize();
  const isMobile = width ? width <= 768 : false;

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

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <section className="services">
        <h2>Our Services</h2>
        <p>
          Our unique approach fosters growth and collaboration, benefiting both
          innovators and influencers in a dynamic ecosystem.
        </p>
        <div className={`service-grid ${isMobile ? "mobile-accordion" : ""}`}>
          {services.map((service, index) =>
            isMobile ? (
              <ServiceAccordionItem
                key={index}
                {...service}
                isOpen={openIndex === index}
                toggleOpen={() => toggleAccordion(index)}
              />
            ) : (
              <div key={index} className="service-item">
                <h3>{service.title}</h3>
                <ul>
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>
      </section>
      <CallToAction />
    </>
  );
};

export default Services;
