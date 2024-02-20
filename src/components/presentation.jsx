import onepiece from '../images/onepiece.png'
import React from 'react'
import IonIcon from '@reacticons/ionicons'
import '../style/presentation.css'


const Presentation = () => {

  return (
    <div className="p-8 relative flex max-md:pl-4 max-sm:flex-col max-sm:items-center max-sm:text-center">
      <div>
        <img src={onepiece} alt="onepiece" className="w-60 h-60 rounded-full max-md:w-50 max-md:h-50 max-sm:w-30 max-sm:h-30"/>
      </div>
      <div className=''>
        <div className='text-white m-8 max-md:m-6 '>
          <h2 className='pt-2 text-2xl max-sm:pt-0 max-sm:text-xl'>Kokou Major Achille Hoka</h2>
          <p className='pt-10 max-sm:pt-4 max-md:text-xs' >Junior Designer, Frontend Developer, Togo</p>
        </div>
        <div>
        <div         className='max-md:before:content[""] max-md:bg-white/30 w-[45%]  max-md:h-1 max-md:absolute max-md:bottom-[90px] max-md:left-[17.5rem] max-sm:w-0 ' ></div>
        <div className='max-md:before:content[""] max-md:bg-white/30 w-[15%]  max-md:h-1 max-md:absolute max-md:bottom-[-16rem] max-md:left-6 max-sm:w-0'></div>
        <div className='max-md:before:content[""] max-md:bg-white/30 w-[15%]  max-md:h-1 max-md:absolute max-md:bottom-[-16rem] max-md:right-6 max-sm:w-0'></div>
        </div>
        <div className='pl-7 pt-4 flex justify-between max-md:absolute max-md:bottom-[-17.5rem] max-md:left-[25%] max-md:right-[25%] max-md:pl-0 max-sm:bottom-[-10rem]' id='logos' >
          <a href="https://github.com/HokArt" target='_blank' rel="noopener noreferrer" className=''><IonIcon className='text-4xl hover:text-white ease-in duration-500 hover:animate-bounce max-sm:hover:animate-none' name='logo-github'/></a>
          <a href="https://tiktok.com/@kokou_hoka" target='_blank' rel="noopener noreferrer"><IonIcon className='text-4xl hover:text-white ease-in duration-500 hover:animate-bounce max-sm:hover:animate-none' name='logo-tiktok'/></a>
          <a href="https://instagram.com/kokouhoka" target='_blank' rel="noopener noreferrer"><IonIcon className='text-4xl hover:text-red-700 ease-in duration-500 hover:animate-bounce max-sm:hover:animate-none' name='logo-instagram'/></a>
          <a href="https://twitter.com/kokouhoka" target='_blank' rel="noopener noreferrer"><IonIcon className='text-4xl hover:text-blue-500 ease-in duration-500 hover:animate-bounce max-sm:hover:animate-none' name='logo-twitter'/></a>
          <a href="https://www.linkedin.com/in/kokouhoka/" target='_blank' rel="noopener noreferrer"><IonIcon className='text-4xl hover:text-blue-600 ease-in duration-500 hover:animate-bounce max-sm:hover:animate-none' name='logo-linkedin'/></a>
          <a href="mailto:kokouhoka@gmail.com" target='_blank' rel="noopener noreferrer"><IonIcon className='text-4xl hover:text-blue-300 ease-in duration-500 hover:animate-bounce max-sm:hover:animate-none' name='mail'/></a>
        </div>
      </div>
    </div>
  )
}

export default Presentation