import React from 'react'
import projects from './modules/project'
import { NavLink } from 'react-router-dom'

const Projects = () => {

  const ProjectsList = projects.map(([name, key, link]) => (<li key={key} className="bg-white/10 text-center rounded hover:text-black hover:bg-slate-400 transition-all ease-in duration-500 cursor-pointer hover:animate-pulse"><a href={link} target="_blank" rel="noopener noreferrer" className="focus:text-black">{name}</a></li>))

  const isScreen = window.innerWidth <= 640

  return (

    <div className="text-white ml-8 max-sm:ml-0 max-sm:text-center max-sm:mt-8">
      {isScreen? (<nav><NavLink to="ProjectPage" className="text-2xl max-sm:hover:bg-white/20 max-sm:transition-all max-sm:ease-in max-sm:duration-500 max-sm:text-xl max-sm:py-1 max-sm:px-28 max-sm:border max-sm:rounded-full" activeClassName="active">
      Projects
        </NavLink></nav>) : (<h1  className="text-2xl">Projects</h1>)}
      <ul className="grid grid-cols-7 gap-5 py-2 px-7 max-lg:grid-cols-5 max-md:grid-cols-3 max-sm:hidden" style={{marginLeft:'-17px'}}>{ProjectsList}</ul>
    </div>
  )
}

export default Projects