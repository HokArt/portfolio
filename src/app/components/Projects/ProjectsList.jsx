import BorderGlowButton from "../GlowButton/GlowBotton"


const ProjectsList = () => {

  const project = [
    ['Code-qr', 'qrcode', 'https://hokart.github.io/Frontend_Qr/'],
    ['Newsletter', 'news', 'https://hokart.github.io/newsletter/'],
    ['Calculator-age', 'age', 'https://hokart.github.io/calculator-age/']
  ]

  return (
    <>
      <h2 className='ml-5 pt-5 text-white font-bold text-2xl'>
        Projects
      </h2>
      <ul className='w-2/4 pl-10 pt-5 flex justify-between text-sm font-medium max-sm:w-11/12 max-md:w-11/12 text-white'>
        {
          project.map(([nameOfProject, key, link]) => (<li key={key} ><a href={link} target='_blank'>
            <BorderGlowButton name={nameOfProject}/>
            </a></li>))
        }
      </ul>
    </>
  )
}

export default ProjectsList