import Head from 'next/head'
import Image from 'next/image'
import UserInput from '../components/UserInput'
import WeatherCard from '../components/WeatherCard'


export default function Home() {
  return (
    <div className='flex flex-row space-x-4 justify-evenly mt-32'>
      <Head>
        <title>WeaApp</title>
        <meta name="description" content="a weather app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <UserInput />
      <WeatherCard />
    </div>
  )
}
