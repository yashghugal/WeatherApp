import { useState } from 'react'
import axios from 'axios'


function App() {
  const [data, setdata] = useState({});
  const [location, setlocation] = useState('');

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=&appid=3d53a6c781427b90429e34c995724380`

  const serrchloc = () => {
    if (event.key === 'Enter') {
      axios.get(url).then((res) => {
        setdata(res.data)
        // console.log(res.data)


      })
      setlocation('')
    }
  }

  return (
    <>
      <div className="bg-[url('./assets/fresh.jpg')] h-screen bg-cover py-10" >
        <div className='flex justify-center'>
          <input className='outline-none px-7 text-center py-3 font-medium placeholder:text-gray-400 text-black rounded shadow-md md:px-[15vw] md:py-4' value={location} onKeyPress={serrchloc} onChange={e => setlocation(e.target.value)} placeholder='Enter location' type="text" />
        </div>
        <div className='flex flex-col justify-between h-[80vh] pt-9'>
          <div className=" text-black px-5">
            <div className="">
              <p className='text-xl font-bold pl-2 lg:text-2xl'>{data.name}</p>
            </div>
            <div className="temp">
              {data.main ? <h4 className='font-black text-6xl lg:text-8xl'>{data.main.temp.toFixed()}°F</h4> : null}
            </div>
            <div className=' relative'>
              {data.weather ? <p className='absolute -right-3 -top-5 -rotate-[90deg] font-medium text-2xl lg:text-4xl'>{data.weather[0].main}</p> : null}          </div>
          </div>
          <div className="flex justify-center mx-5">
            <div className='flex gap-7 md:gap-14 bg-slate-50 px-8 py-4 shadow-2xl rounded-md'>
              <div className="text-center">
                {data.main ? <p className='font-medium text-normal md:text-lg lg:text-xl'>{data.main.feels_like.toFixed()}° F</p> : null}


                <p className='text-normal font-normal md:text-lg lg:text-xl'>Feels Like</p>

              </div>
              <div className="text-center">
                {data.main ? <p className='font-medium text-normal md:text-lg lg:text-xl'>{data.main.humidity} %</p> : null}

                <p className='text-normal font-normal md:text-lg lg:text-xl'>Humidity</p>
              </div>
              <div className="text-center">
                {data.wind ? <p className='font-medium text-normal md:text-lg lg:text-xl'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p className='text-normal font-normal md:text-lg lg:text-xl'>Wind Speed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
