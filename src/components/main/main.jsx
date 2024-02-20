import Presentation from "../presentation"
import Skills from '../skills'
import Projects from "../projects"

const Main = () => {

  return (
    <div className=" backdrop-opacity-10  bg-white/10 h-[85vh] w-[85%] rounded-lg font-bold max-lg:h-[100vh] max-lg:w-[100%] max-lg:bg-transparent max-lg:backdrop-opacity-0 ">
      <Presentation/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default Main