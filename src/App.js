import Main from "./components/main/main";
import ProjectPage from "./components/projectpage";
import SkillPage from "./components/skillpage";
import Error from "./components/errorpage";
import { 
  createBrowserRouter,
  RouterProvider
 } from "react-router-dom";

 const router = createBrowserRouter([
  {
    path:'/',
    element: <Main/>,
    errorElement: <Error/>,
  },
  {
    path: 'SkillPage',
    element: <SkillPage/>
  },
  {
    path: 'ProjectPage',
    element: <ProjectPage/>
  }
 ], {
  basename: '/portfolio'
 })

function App() {
  return (
    <div className="bg-[url('./images/onepiece.png')] h-[100vh] w-[100%]  bg-no-repeat bg-cover flex justify-center items-center">
      <RouterProvider router = {router} />
    </div>
  );
}

export default App;
