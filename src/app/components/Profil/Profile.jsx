import Image from 'next/image'
// import onepiece from '../../Images/onepiece.png'
import hk from '../../Images/hk.jpg'
import IconsLink from '../IconsLink/IconsLink'


const Profile = () => {

  const user = {
    firstName: 'Kokou Major Achille',
    lastName: 'Hoka',
    profession: 'Frontend Developer, Togo'
  }

  return (
    <div className='flex max-sm:flex-col max-sm:justify-center items-center'>
      <Image
        src={hk}
        alt='onepiece'
        className='h-48 w-48 rounded-full mt-3 ml-3 mr-3' 
        priority
      />
      <div className='pt-10 pl-2 text-white '>
        <h1 id='edem' className='text-2xl font-bold max-[345px]:text-xl max-[345px]:text-center'>
          {user.firstName} {user.lastName}
        </h1>
        <h2 className=' pt-6 font-semibold max-[375px]:text-center max-sm:text-center'>
          {user.profession} 
        </h2>
        <IconsLink/>
      </div>
    </div>
  )
}

export default Profile