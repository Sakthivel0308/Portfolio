import React, { useState } from "react";
import styles from "./Projects.module.css";
import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

const ITEMS_PER_PAGE = 4;

export const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(projects.length / ITEMS_PER_PAGE);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPaginatedProjects = () => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return projects.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.pagination}>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`${styles.pageButton} ${
              currentPage === index + 1 ? styles.active : ""
            }`}
            onClick={() => handlePageChange(index + 1)}
          >
            TAB {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.projects}>
        {getPaginatedProjects().map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
      </div>
    </section>
  );
};
