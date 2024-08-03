import Presentation from "./components/Presentation/Presentation";
import SkillsList from "./components/Skills/SkillsList";
import ProjectsList from "./components/Projects/ProjectsList";
import dynamic from 'next/dynamic'
const CurrentDateTime = dynamic(() => import('./components/CurrentDateTime/CurrentDateTime'), { ssr: false, loading : () => (
  <div className='h-[12.5rem] w-2/4 flex justify-center items-center'>
    <BounceLoad />
  </div>
) })
import Meteo from "./components/Meteo/Meteo";
// import BounceLoader from "./components/BounceLoader/BounceLoader";
import TestimonialCarousel from "./components/TestimonialCarousel/TestimonialCarousel";
import BounceLoad from "./components/BounceLoader/BounceLoad";
// import NavBar from "./components/NavBar/NavBar";


export default function Home() {
  
  return (
    <main className="h-screen w-[100%] bg-[url('./Images/onepiece.png')] bg-no-repeat bg-cover flex justify-center items-center" property='true' >
      <div className="relative bg-white/10  h-[90%] w-[90%] rounded-lg max-md:overflow-y-scroll max-md:overscroll-contain overflow-x-hidden max-md:w-[95%] max-md:h-[98%]">
        <Presentation/>
        <SkillsList/>
        <ProjectsList/>
        <div className='w-2/4 flex max-md:w-full max-[375px]:flex-col max-[500px]:flex-col'>
          <CurrentDateTime/>
          <Meteo/>
        </div>
        <TestimonialCarousel/>
        {/* <NavBar/> */}
      </div>
    </main>
  );
}
