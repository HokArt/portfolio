import { DiHtml5, DiCss3 } from "react-icons/di";
import { FaSass, FaReact, FaGithub, FaGitAlt } from 'react-icons/fa';
import { RiTailwindCssFill } from 'react-icons/ri';
import { BiLogoJavascript } from "react-icons/bi";
import { RiNextjsFill } from "react-icons/ri";

const logos = [
  {
    name: 'Html',
    logo: DiHtml5,
  },
  {
    name: 'Css',
    logo: DiCss3,
  },
  {
    name: 'Sass',
    logo: FaSass,
  },
  {
    name: 'TailwindCss',
    logo: RiTailwindCssFill,
  },
  {
    name: 'JavaScript',
    logo: BiLogoJavascript,
  },
  {
    name: 'React',
    logo: FaReact,
  },
  {
    name: 'NextJs',
    logo: RiNextjsFill,
  },
  {
    name: 'Git',
    logo: FaGitAlt,
  },
  {
    name: 'Github',
    logo: FaGithub,
  },
];

const AnimatedLogoCloud = () => {
  return (
    <div className="w-2/4 ">
      <div>
        <h1 className='ml-5 pt-5 text-white font-bold text-2xl'>Skills</h1>
        <div
          className="group relative mt-5 flex gap-6 overflow-hidden "
          style={{
            maskImage:
              'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
          }}
        >
          {Array(5)
            .fill(null)
            .map((_, index) => (
              <div
                key={index}
                className="flex shrink-0 animate-logo-cloud flex-row justify-around gap-6"
              >
                {logos.map((logo, idx) => (
                  <logo.logo key={idx} className='size-8 text-white'/>
                ))}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedLogoCloud;
