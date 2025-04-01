import React, { useState } from "react";
import {
  Container,
  Filter,
  FilterSelectBox,
  Header,
  Projects,
  Separator,
  IconBox,
} from "./styles";
import { FaAngleDown } from "react-icons/fa";
import { BsEye } from "react-icons/bs";

import imageProject01 from "../../assets/projects/System-Forms.png";
import imageProject02 from "../../assets/projects/central-de-ajuda.jpg";
import imageProject03 from "../../assets/projects/gerador-de-paletas.png";

const Portfolio = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [activeProjectId, setActiveProjectId] = useState(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    setIsDropdownOpen(false); // Fechar dropdown após seleção
    setActiveProjectId(null); // Resetar projeto ativo ao mudar categoria
  };

  const projects = [
    {
      id: 1,
      image: imageProject01,
      category: "Web",
      title: "Formulários",
      description: "Criação de Formulários",
      link: "https://system-forms.vercel.app/",
    },
    {
      id: 2,
      image: imageProject02,
      category: "Mobile",
      title: "Central de Ajuda",
      description: "Para abrir chamados de suporte",
      link: "https://github.com/brunblima/react-native-helpdesk",
    },
    {
      id: 3,
      image: imageProject03,
      category: "Web",
      title: "Gerador de Paletas",
      description: "Gerar paletas de cores",
      link: "https://gerador-de-paletas.vercel.app/",
    },
  ];

  const filteredProjects =
    selectedCategory === "Todos"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Container>
      <Header>
        <h2>Portfolio</h2>
        <Separator />
      </Header>
      <Projects>
        <Filter>
          <ul>
            <li>
              <button
                className={selectedCategory === "Todos" ? "active" : ""}
                onClick={() => handleCategorySelect("Todos")}
              >
                Todos
              </button>
            </li>
            <li>
              <button
                className={selectedCategory === "Web" ? "active" : ""}
                onClick={() => handleCategorySelect("Web")}
              >
                Web
              </button>
            </li>
            <li>
              <button
                className={selectedCategory === "Mobile" ? "active" : ""}
                onClick={() => handleCategorySelect("Mobile")}
              >
                Mobile
              </button>
            </li>
          </ul>
        </Filter>

        <FilterSelectBox className={isDropdownOpen ? "active" : ""}>
          <button onClick={toggleDropdown}>
            <div>{selectedCategory}</div>
            <div>
              <FaAngleDown />
            </div>
          </button>

          <ul className={isDropdownOpen ? "open" : ""}>
            <li onClick={() => handleCategorySelect("Todos")}>Todos</li>
            <li onClick={() => handleCategorySelect("Web")}>Web</li>
            <li onClick={() => handleCategorySelect("Mobile")}>Mobile</li>
          </ul>
        </FilterSelectBox>

        <ul>
          {filteredProjects.map((project) => (
            <li
              key={project.id}
              category={project.category}
              className={activeProjectId === project.id ? "active" : ""}
            >
              <a>
                <figure>
                  <img src={project.image} alt={project.title} />
                  <button onClick={() => window.open(project.link, "_blank")}>
                    <IconBox>
                      <BsEye size={25} />
                    </IconBox>
                  </button>
                </figure>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </Projects>
    </Container>
  );
};

export default Portfolio;
