"use client"
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import Image from 'next/image';
import BounceLoader from '../BounceLoader/BounceLoader';

const Meteo = () => {
  const [city, setCity] = useState('lome');
  const [input, setInput] = useState('');
  const APIKEY = '325547a0e6ee7b0f9c6fe197ff71a95c';
  const url = useMemo(() => {
    return `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric&lang=fr&lat&lon`;
  }, [city]);

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    setCity(input);
  }, [input]);

  const [weatherData, setWeatherData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setWeatherData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <div className='absolute top-0 right-0 w-2/4 pl-3'>
      {weatherData ? (
        <div className='grid grid-cols-2 mt-10'>
          <p className='flex justify-center items-center'>
            <strong>{weatherData.name}</strong>
          </p>
          <p className='text-center'>
            <strong>Température</strong>
            <br />
            <strong>{weatherData.main.temp}°C</strong>
          </p>
          <p className='flex justify-center items-center'>
            <strong>{weatherData.weather[0].description}</strong>
          </p>
          <span className='flex justify-center'>
            <Image
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              width={75}
              height={75}
              alt='Icône météo'
            />
          </span>
          <form onSubmit={handleSearch} className='flex'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder='Ville'
              className='bg-transparent border outline-none rounded-lg mr-5 caret-white placeholder:text-white placeholder:italic text-white white pl-5'
            />
            <button type='submit' className='text-white border rounded-lg px-2'>
              Search
            </button>
          </form>
        </div>
      ) : (
        <div className='h-[12.5rem] flex justify-center items-center'>
          <BounceLoader />
        </div>
      )}
    </div>
  );
};

export default Meteo;
