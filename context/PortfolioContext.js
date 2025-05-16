import { createContext, useContext, useEffect, useState } from "react";

const PortfolioContext = createContext();

export function usePortfolio() {
  return useContext(PortfolioContext);
}

export function PortfolioProvider({ children }) {
  const [projects, setProjects] = useState([]);
  const [skills, setSkills] = useState([]);

  // Ladda från localStorage
  useEffect(() => {
    const storedProjects = localStorage.getItem("portfolio-projects");
    const storedSkills = localStorage.getItem("portfolio-skills");

    if (storedProjects) setProjects(JSON.parse(storedProjects));
    if (storedSkills) setSkills(JSON.parse(storedSkills));
  }, []);

  // Spara till localStorage varje gång det ändras
  useEffect(() => {
    localStorage.setItem("portfolio-projects", JSON.stringify(projects));
  }, [projects]);

  useEffect(() => {
    localStorage.setItem("portfolio-skills", JSON.stringify(skills));
  }, [skills]);

  return (
    <PortfolioContext.Provider
      value={{ projects, setProjects, skills, setSkills }}
    >
      {children}
    </PortfolioContext.Provider>
  );
}
