import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { useState, useEffect } from 'react'

export default function Home() {

  const [location, setLocation] = useState('')
  const [data, setData ] = useState({})
  const [click, setClick ] = useState(false)

  useEffect(() => {
    handleGetWeather()
  }, [click])

  const handleGetWeather = async () => {

    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const city = location
    const { data } = await axios.post(
      'http://20.212.207.47:5000/',
      { city },
      config
    )
      console.log(data);
    if(data) {
      setData(data)
    }
  }

  const { temp_value, city, temp_desc } = data
  
  return (
    <div className='flex flex-col items-center md:flex-row space-y-10 md:space-x-4 px-18 justify-evenly mt-10'>
      <Head>
        <title>Weathy</title>
        <meta name="description" content="a weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* // User Input */}
      <div className='h-20 w-[300px]'>
        <div className='flex flex-col space-y-4'>
          <label className="text-gray-700 font-semibold">Search by City</label>
          <input
            onChange={(e) => setLocation(e.target.value)}
            type="text"
            className="
                                mt-1
                                block
                                w-full
                                rounded-md
                                bg-gray-100
                                border-transparent
                                focus:border-sky-400 focus:bg-white focus:ring-0
                                "
            placeholder="City"
          />
          <button className='border-gray h-8 w-40 py-2 px-4 rounded-lg' onClick={() => setClick(!click)}>Get Weather!</button>
        </div>
      </div>


      {/* //Display Data */}
      <div className=' max-w-md px-4 rounded-2xl h-[300px] w-[250px] md:w-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-r hover:from-sky-500 hover:to-indigo-500 shadow-xl hover:shadow-2xl transform hover:scale-105 transition duration-300'>
        <div className='flex flex-col h-[100%] items-center justify-evenly text-white font-poppins'>
          <div className='text-xl '>Weather</div>
          <div className='text-5xl tracking-wide'>{temp_value} &deg; C</div>
          <div className='flex w-full justify-around'>
            <p className='text-lg'>{city}</p>
            <p className=''>Feels like {temp_desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
