import React from "react";
import "./Hero.css";

import { useEffect, useState } from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__content">
        {/* Left Column - Text */}
        <div className="hero__column">
          <h1 className="h1 hero__heading">
            <span className="hero__heading-gradient">LLM-Powered AI </span>
            for Seamless{" "}
            <span className="hero__heading-gradient">College Assistance </span>
            and Smarter Learning.
          </h1>
          <p className="text-reg hero__subheading">
            ThaparGenie: Your Personal GPT for All Campus Queries and Support.
          </p>
        </div>

        {/* Right Column - Carousel */}
        <div className="hero__carousel-container">
          <div className="hero__carousel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
