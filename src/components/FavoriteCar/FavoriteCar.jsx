
import { useState } from 'react';
import './FavoriteCar.css'

function FavoriteCar() {

    const defaultCar = {
        carYear: 2024,
        carName: "Uno",
        carModel: "Sedan"
    }

    const [car, setCar] = useState(defaultCar)

    function handleChangeYear(event) {
        setCar(c => ({...car, carYear: event.target.value}))
    }

    function handleChangeName(event) {
        setCar(c => ({...car, carName: event.target.value}))
    }

    function handleChangeModel(event) {
        setCar(c => ({...car, carModel: event.target.value}))
    }

    return (
        <div>
            <p>Favorite Car: {car.carYear} {car.carName} {car.carModel}</p>
            <div className="favorite-container">
                <input type="number" value={car.carYear} onChange={handleChangeYear}></input>
                <input type="text" value={car.carName} onChange={handleChangeName}></input>
                <input type="text" value={car.carModel} onChange={handleChangeModel}></input>
            </div>
        </div> 
     );
}

export default FavoriteCar;