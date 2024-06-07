import React, { useState, useEffect } from 'react';
import styles from './scoreboard.module.scss';
import { Link } from 'react-router-dom';

function Scoreboard() {
    const [view, setView] = useState('smashed'); // Estado para manejar la vista de la tabla
    const [smashedCars, setSmashedCars] = useState([]);
    const [passedCars, setPassedCars] = useState([]);
    let i = 1;

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

    if (smashedCars.length === 0) {
        return (
            <div id={styles.loading}>
                <h1>Loading...</h1>
                <p>If it is taking a long time, it is possible that the server is not working correctly. Try again later.</p>
            </div>
        );
    }

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
                    <div className={styles.tablescroll}>
                        <table>
                            <tbody>
                                {smashedCars.map(car => (
                                    <tr key={car.id}>
                                        <td>{i++}</td>
                                        <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                        <td>
                                            <Link to={car.moreinfo} target="_blank" className={styles.moreinfo}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                                                {car.year} {car.brand} {car.model}
                                            </Link>
                                        </td>
                                        <td>{car.smash}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}

            {view === 'passed' && (
                <section id={styles.passtable}>
                    <h2>Most Passed</h2>
                    <div className={styles.tablescroll}>
                        <table>
                            <tbody>
                                {passedCars.map(car => (
                                    <tr key={car.id}>
                                        <td>{i++}</td>
                                        <td><img src={`cars_img/${car.id}.webp`} alt={`${car.year} ${car.brand} ${car.model}`} /></td>
                                        <td>
                                            <Link to={car.moreinfo} target="_blank" className={styles.moreinfo}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"/></svg>
                                                {car.year} {car.brand} {car.model}
                                            </Link>
                                        </td>
                                        <td>{car.pass}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            )}
        </main>
    );
}

export default Scoreboard;