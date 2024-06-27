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

import imageProject01 from "../../assets/projects/project-1.jpg";
import imageProject02 from "../../assets/projects/project-2.png";
import imageProject03 from "../../assets/projects/project-3.jpg";
import imageProject04 from "../../assets/projects/project-4.png";
import imageProject05 from "../../assets/projects/project-5.png";
import imageProject06 from "../../assets/projects/project-6.png";

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
      title: "Project 1",
      description: "Description 1",
    },
    {
      id: 2,
      image: imageProject02,
      category: "Web",
      title: "Project 2",
      description: "Description 2",
    },
    {
      id: 3,
      image: imageProject03,
      category: "Web",
      title: "Project 3",
      description: "Description 3",
    },
    {
      id: 4,
      image: imageProject04,
      category: "Web",
      title: "Project 4",
      description: "Description 4",
    },
    {
      id: 5,
      image: imageProject05,
      category: "Mobile",
      title: "Project 5",
      description: "Description 5",
    },
    {
      id: 6,
      image: imageProject06,
      category: "Mobile",
      title: "Project 6",
      description: "Description 6",
    },
    {
      id: 7,
      image: imageProject06,
      category: "Mobile",
      title: "Project 6",
      description: "Description 6",
    },
    {
      id: 8,
      image: imageProject06,
      category: "Mobile",
      title: "Project 6",
      description: "Description 6",
    },
    {
      id: 9,
      image: imageProject06,
      category: "Mobile",
      title: "Project 6",
      description: "Description 6",
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
              onClick={() => setActiveProjectId(project.id)}
              className={activeProjectId === project.id ? "active" : ""}
            >
              <a>
                <figure>
                  <img src={project.image} alt={project.title} />
                  <IconBox>
                    <BsEye size={25} />
                  </IconBox>
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
