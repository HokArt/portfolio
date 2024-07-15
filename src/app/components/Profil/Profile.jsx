import Image from 'next/image'
import onepiece from '../../Images/onepiece.png'
import IconsLink from '../IconsLink/IconsLink'


const Profile = () => {

  const user = {
    firstName: 'Kokou Major Achille',
    lastName: 'Hoka',
    profession: 'Frontend Developer, Togo'
  }

  return (
    <>
      <Image
        src={onepiece}
        alt='onepiece'
        className='h-48 w-48 rounded-full mt-3 ml-3 mr-3' 
        priority
      />
      <div className='pt-10 pl-2 text-white '>
        <h1 id='edem' className='text-2xl font-bold'>
          {user.firstName} {user.lastName}
        </h1>
        <h2 className=' pt-6 font-semibold'>
          {user.profession} 
        </h2>
        <IconsLink/>
      </div>
    </>
  )
}

export default Profile