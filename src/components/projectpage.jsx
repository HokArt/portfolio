import projects from "./modules/project";
import React from "react";
import { NavLink } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

const ProjectPage = () => {

  const ProjectList = projects.map(([name, key, link]) => (<li key={key} className="my-2 border-x hover:bg-white/20 py-2" ><a href={link} target="_blank" rel="noopener noreferrer" className="px-16 ">{name}</a></li>))

  return (
    <div className="text-white text-center text-xl ">
      <nav className="absolute top-2 left-3">
        <NavLink to='/'><IonIcon name="home"/></NavLink>
      </nav>
      <ul>{ProjectList}</ul>
    </div>
  )
}

export default ProjectPage