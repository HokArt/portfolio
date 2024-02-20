import skills from "./modules/skill";
import React from "react";
import { NavLink } from "react-router-dom";
import IonIcon from "@reacticons/ionicons";

const SkillPage = () => {

  const skillsList = skills.map(([ name, key ]) => (<li key={key} className="my-2 border-b border-b-sky-700 px-16">{name}</li>))
  
  return (
    <div className="text-white text-center text-xl ">
      <nav className="absolute top-2 left-3">
        <NavLink to='/'><IonIcon name="home"/></NavLink>
      </nav>
      <ul key='foo'>{skillsList}</ul>
    </div>
  )
}

export default SkillPage