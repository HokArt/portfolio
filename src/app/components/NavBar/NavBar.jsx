import React from 'react'
import GradientFillButton from '../GlowButton/FillButton'

const NavBar = () => {
  return (
    <div className='w-2/4 text-white absolute top-0 right-0'>
      <ul className='flex justify-around items-center'>
        <GradientFillButton name={'Elom'}/>
        <GradientFillButton name={'Elom'}/>
        <GradientFillButton name={'Elom'}/>
        <GradientFillButton name={'Elom'}/>
      </ul>
    </div>
  )
}

export default NavBar