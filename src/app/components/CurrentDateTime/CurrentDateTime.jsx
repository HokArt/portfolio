"use client"
import React, { useState, useEffect } from 'react';

const CurrentDateTime = () => {    

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = currentTime.toLocaleDateString(undefined, options);
  
  const formaTime = (value) => (value < 10 ? `0${value}` : value)
  const hours = formaTime(currentTime.getHours())
  const minutes = formaTime(currentTime.getMinutes())
  // const seconds = formaTime(currentTime.getSeconds())

  return (
    <>
      <div className='w-2/4 flex flex-col items-center mt-5 text-white'>
        <p className='text-2xl font-semibold '>
          {formattedDate} 
        </p>
        <p className='text-[7.5vw] pl-1'>
        {hours} : {minutes}
        </p>
      </div>
    </>
  );
};

export default CurrentDateTime
