import Presentation from "./components/Presentation/Presentation";
import SkillsList from "./components/Skills/SkillsList";
import ProjectsList from "./components/Projects/ProjectsList";
import dynamic from 'next/dynamic'
const CurrentDateTime = dynamic(() => import('./components/CurrentDateTime/CurrentDateTime'), { ssr: false, loading : () => (
  <div className='h-[12.5rem] w-2/4 flex justify-center items-center'>
    <BounceLoader />
  </div>
) })
import Meteo from "./components/Meteo/Meteo";
import BounceLoader from "./components/BounceLoader/BounceLoader";
import TestimonialCarousel from "./components/TestimonialCarousel/TestimonialCarousel";
import PreloadResources from "./components/PreloadResources/PreloadResources";
import NavBar from "./components/NavBar/NavBar";


export default function Home() {
  
  return (
    <main className="h-[100vh] w-[100%] bg-[url('./Images/onepiece.png')] bg-no-repeat bg-cover flex justify-center items-center" property='true' >
      <div className="relative bg-white/10 h-[90%] w-[90%] rounded-lg">
        <PreloadResources/>
        <Presentation/>
        <SkillsList/>
        <ProjectsList/>
        <div className='relative w-2/4 flex'>
          <CurrentDateTime/>
          <Meteo/>
        </div>
        <TestimonialCarousel/>
        <NavBar/>
      </div>
    </main>
  );
}
