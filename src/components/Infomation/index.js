import React, { useState } from "react";
import { MainContent } from "./styles";
import AboutMe from "../AboutMe";
import Portfolio from "../Portfolio";
import Contact from "../Contact";
import NavBar from "../NavBar";
import Resume from "../Resume";

const Information = () => {
  const [activeTab, setActiveTab] = useState("about");

  const renderContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutMe />;
      case "resume":
        return <Resume />;
      case "portfolio":
        return <Portfolio />;
      case "contact":
        return <Contact />;
      default:
        return <AboutMe />;
    }
  };

  return (
    <MainContent>
        <NavBar activeTab={activeTab} setActiveTab={setActiveTab} />
        {renderContent()}
    </MainContent>
  );
};

export default Information;
