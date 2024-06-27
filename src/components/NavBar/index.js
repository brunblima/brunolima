import React from "react";
import { Nav } from "./styles";

const Navbar = ({ activeTab, setActiveTab }) => (
  <Nav>
   <ul>
      <li className={activeTab === "about" ? "active" : ""} onClick={() => setActiveTab("about")}>Sobre mim</li>
      <li className={activeTab === "resume" ? "active" : ""} onClick={() => setActiveTab("resume")}>Resumo</li>
      <li className={activeTab === "portfolio" ? "active" : ""} onClick={() => setActiveTab("portfolio")}>Portfólio</li>
      <li className={activeTab === "contact" ? "active" : ""} onClick={() => setActiveTab("contact")}>Contato</li>
    </ul>
  </Nav>
);

export default Navbar;
