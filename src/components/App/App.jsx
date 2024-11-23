import React from "react";
import "./App.css";

//images
import doubleQoute from "../../assets/double-quote.svg";

// fonts
import "../../fonts/fonts.css";

// components
import Page from "../Page/Page";
import Header from "../Header/Header";
import Hero from "../Hero/Hero";
//import Logos from "../Logos/Logos";
import Features from "../Features/Features";
import FAQ from "../FAQ/FAQ";
import CTA from "../CTA/CTA";
import Footer from "../Footer/Footer";
import Accordion from "../Accordion/Accordion";
import Navigation from "../Navigation/Navigation";

const App = () => {
  return (
    <Page>
      <Header>
        <Navigation />
        <Hero />
      </Header>
      {/* <Logos /> */}
      <Features />
      <FAQ>
        <Accordion />
      </FAQ>
      <CTA />
      <Footer />
    </Page>
  );
};

export default App;
