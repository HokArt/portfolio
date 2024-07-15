import { AiFillGithub, AiOutlineX, AiOutlineTikTok, AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram } from "react-icons/ai"


const IconsLink = () => {
  
  return (
    <div className="flex justify-center space-x-6 pt-8 text-white">
      <a href="https://github.com/HokArt" target="_blank" rel="noopener noreferrer">
        <AiFillGithub className="size-8 cursor-pointer transition-all ease-in duration-500 hover:text-black "/>
      </a>
      <a href="https://twitter.com/kokouhoka" target="_blank" rel="noopener noreferrer">
        <AiOutlineX className="size-8 cursor-pointer hover:text-black transition-all ease-in duration-500"/>
      </a>
      <a href="https://tiktok.com/@kokou_hoka" target="_blank" rel="noopener noreferrer">
        <AiOutlineTikTok className="size-8 cursor-pointer hover:text-black transition-all ease-in duration-500"/>
      </a>
      <a href="mailto:kokouhoka@gmail.com" target="_blank" rel="noopener noreferrer">
        <AiOutlineMail className="size-8 cursor-pointer hover:text-blue-500 transition-all ease-in duration-500"/>
      </a>
      <a href="https://www.linkedin.com/in/kokouhoka/" target="_blank" rel="noopener noreferrer">
        <AiOutlineLinkedin className="size-8 cursor-pointer hover:text-blue-500 transition-all ease-in duration-500"/>
      </a>
      <a href="https://instagram.com/kokouhoka" target="_blank" rel="noopener noreferrer">
        <AiOutlineInstagram className="size-8 cursor-pointer hover:text-red-600 transition-all ease-in duration-500"/>
      </a>
    </div>
  )
}

export default IconsLink
