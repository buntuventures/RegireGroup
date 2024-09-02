import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="cta">
      <h3>Get in touch</h3>
      <p>
        Whether you want to collaborate with the best minds or tell us about a
        project, reach out to us.
      </p>
      <div className="cta-buttons">
        <a
          href="https://forms.gle/Aa3ykR5rxsxQ4Gdd8"
          className="btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          I’m a creator
        </a>
        <a href="https://forms.gle/3DtC4VBdYbkVJkL1A" className="btn secondary">
          I’m a project
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
