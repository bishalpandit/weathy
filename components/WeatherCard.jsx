import React from 'react'
import Image from 'next/image'

const WeatherCard = () => {
    return (
        <div className='relative'>
            {/* <Image src={`/imgs/hot.png`} className='rounded-3xl ' alt='weather-card' /> */}

            <div className='absolute '>
                <div className='font-lg'>Weather</div>
                <div className='font-3xl'>12 C</div>
                <div className='font-lg'>Hot</div>
            </div>
        </div>
    )
}



export default WeatherCard
