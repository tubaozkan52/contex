import React, { useEffect, useState } from 'react'
import { useWaether } from '../context/weathercontex'


function Card() {
    const { weather, current } = useWaether()
    const [day, setDay] = useState()
    const daysOfWeek = ["Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi", "Pazar"]

    useEffect(() => {
        !weather ? console.log("yükleniyor...") : console.log("yüklendi")

        setDay(daysOfWeek)
    }, [weather])
    
    const icon_src = `http://openweathermap.org/img/w/`


    return (
        <div className='Card'>
            
            <>{weather &&

                weather.map((item, id) =>
                    item.weather.map((weather) =>

                        <div key={weather.id}>
                            <h2>{day[id]}</h2>
                            <img src={icon_src + weather.icon + ".png"} alt={icon_src}/>
                            <br></br>
                            <h4>{weather.description}</h4>
                            <h4>{current.temp_min}°C{current.temp_max}°C</h4>
                        </div>
                    ))
            }
            </>
             
        </div>
    )
}

export default Card