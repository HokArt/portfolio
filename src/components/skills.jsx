import React from 'react'
import skills from './modules/skill'
import { NavLink } from 'react-router-dom'


const Skills = () => {

  const SkillsList = skills.map(([name, key]) => (<li key={key} className="bg-white/10 text-center rounded hover:text-black hover:bg-slate-400 transition-all ease-in duration-500 ">{name}</li>))

  const isScreen = window.innerWidth <= 640

  return (
    <div className="text-white ml-8 mt-0 max-sm:ml-0 max-sm:text-center max-sm:mt-[-25px]">
      {isScreen? (<nav><NavLink to="SkillPage" className="text-2xl max-sm:hover:bg-white/20 max-sm:transition-all max-sm:ease-in max-sm:duration-500 max-sm:text-xl max-sm:py-1 max-sm:px-32 max-sm:border max-sm:rounded-full max-sm:relative" activeClassName="active">
        Skills
      </NavLink></nav>) : (<h1  className="text-2xl">Skills</h1>)}
      <ul key='zoo' className="grid grid-cols-7 gap-5 py-2 px-3 max-lg:grid-cols-5 max-sm:hidden">{SkillsList}</ul>
    </div>
  )
}

export default Skills
