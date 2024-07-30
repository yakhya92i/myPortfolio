"use client";
import React, { useState, useRef } from "react";
import ProjectCard from './ProjectCard'
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
    {
      id: 1,
      title: "Weather app",
      description: "Html, Css & javascript weather app",
      image: "/images/Projects/weatherApp.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/yakhya92i/CP9-RRenJS.git",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "Notes App",
      description: "A Fullstack Notes App built with MERN Technology",
      image: "/images/Projects/Notes.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/yakhya92i/Note-back.git",
      previewUrl: "https://note-front-wheat.vercel.app/",
    },
    {
      id: 6,
      title: "Coffee App with React",
      description: "Showcase website created in 2 hours by students in a software development bootcamp, featuring their skills and projects through a modern and clean design",
      image: "/images/Projects/reactCoffeeApp.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/yakhya92i/challenge.git",
      previewUrl: "/",
    },
  ];


  const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Mobile"
            isSelected={tag === "Mobile"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;