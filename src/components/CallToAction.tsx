import React from "react";

const CallToAction: React.FC = () => {
  return (
    <section className="cta">
      <h3>Join Our Network</h3>
      <p>
        Connect with the most promising projects or explore how we can support
        your launch and growth.
      </p>
      <div className="cta-buttons">
        <a
          href="https://docs.google.com/forms/d/1SeGhJXm4G9SU_zmIBUQzYqfqydZMCoT9N93HfaD_Y64/edit"
          className="btn primary"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Us
        </a>
        <a href="mailto:jesse@regiregroup.com" className="btn secondary">
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default CallToAction;
