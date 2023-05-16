import React from 'react'
import { useWaether } from '../context/weathercontex'
import cties from '../json/cities.json'

function Section() {

    const { setCity, city:cityName } = useWaether()
    const handleChange = ((citySelect) => {
        setCity(citySelect.target.value)
    })
    return (
        <div>
            <h1 className='HeadText'>weather forecast</h1>

            <div className='custom-select'>
                <select onChange={handleChange}>
                    {
                        cties.map((city) =>
                            <option key={city.id} selected={city.name===cityName}>{city.name}</option>
                        )
                    }
                </select>
                    
            </div>

        </div >
    )
}

export default Section