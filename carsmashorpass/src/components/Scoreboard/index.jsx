import React, { useState, useEffect } from 'react';
import styles from './scoreboard.module.scss';

function Scoreboard() {
    const [view, setView] = useState('smashed'); // Estado para manejar la vista de la tabla
    const [smashedCars, setSmashedCars] = useState([]);
    const [passedCars, setPassedCars] = useState([]);

    const fetchSmashedCars = async () => {
        const response = await fetch('http://localhost:3001/cars/mostsmashed');
        const data = await response.json();
        setSmashedCars(data);
    };

    const fetchPassedCars = async () => {
        const response = await fetch('http://localhost:3001/cars/mostpassed');
        const data = await response.json();
        setPassedCars(data);
    };

    useEffect(() => {
        fetchSmashedCars();
        fetchPassedCars();
    }, []);

    return (
        <main id={styles.scoreboard}>
            <h1>Scoreboard</h1>

            <section id={styles.contbtn}>
                <button id={styles.smashbtn} onClick={() => setView('smashed')}>Most Smashed</button>
                <button id={styles.passbtn} onClick={() => setView('passed')}>Most Passed</button>
            </section>

            {view === 'smashed' && (
                <section id={styles.smashtable}>
                    <h2>Most Smashed</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>Name</th>
                                <th>N</th>
                            </tr>
                        </thead>
                        <tbody>
                            {smashedCars.map(car => (
                                <tr key={car.id}>
                                    <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                    <td><span>{car.year}</span>{car.brand} {car.model}<span>{car.country}</span></td>
                                    <td>{car.smash}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}

            {view === 'passed' && (
                <section id={styles.passtable}>
                    <h2>Most Passed</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Img</th>
                                <th>Name</th>
                                <th>N</th>
                            </tr>
                        </thead>
                        <tbody>
                            {passedCars.map(car => (
                                <tr key={car.id}>
                                    <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                    <td><span>{car.year}</span>{car.brand} {car.model}<span>{car.country}</span></td>
                                    <td>{car.pass}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
            )}
        </main>
    );
}

export default Scoreboard;