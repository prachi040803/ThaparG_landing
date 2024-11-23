import React from "react";
import "./Features.css";
import { features } from "../../utils/constants";

const Features = () => {
  return (
    <section className="features">
      <div className="features__heading-container">
        <h2 className="h2 features__heading">
          Discover the Power of{" "}
          <span className="h2 features__text-gradient">ThaparGenie</span>
        </h2>
        <p className="text-reg features__subheading">
        ThaparGPT is your go-to AI assistant, designed to provide instant solutions to all your Thapar-related queries. From academic guidance to campus events, get personalized answers anytime, anywhere, and make your college experience smoother and more informed!
        </p>
      </div>
      <div className="features__feature-container">
        {features.map((obj, i) => {
          return (
            <div className={`feature ${obj.gridArea}`} key={i}>
              <img
                className="feature__icon"
                src={obj.image}
                alt={obj.heading}
              />
              <p className="text-large feature__heading">{obj.heading}</p>
              <p className="text-reg feature__description">{obj.description}</p>
            </div>
          );
        })}
      </div>
      <div className="features__overlay-gradient"></div>
    </section>
  );
};

export default Features;
